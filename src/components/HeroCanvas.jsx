"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Icosphere() {
  const meshRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Slow auto rotation
    meshRef.current.rotation.y += delta * 0.08;
    meshRef.current.rotation.x += delta * 0.03;

    // Mouse parallax — subtle tilt toward cursor
    meshRef.current.rotation.x +=
      (mousePos.current.y * 0.3 - meshRef.current.rotation.x) * 0.02;
    meshRef.current.rotation.y +=
      (mousePos.current.x * 0.3 - meshRef.current.rotation.y) * 0.02;
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <icosahedronGeometry args={[1, 2]} />
      <meshBasicMaterial
        color="#55d1ff"
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function ParticleField() {
  const pointsRef = useRef();
  const particleCount = 600;

  // Pseudo-random deterministic distribution (pure)
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const seed1 = Math.sin(i * 12.9898) * 43758.5453;
      const seed2 = Math.cos(i * 78.233) * 43758.5453;
      const seed3 = Math.sin(i * 93.989) * 43758.5453;
      pos[i * 3] = ((seed1 - Math.floor(seed1)) - 0.5) * 14;
      pos[i * 3 + 1] = ((seed2 - Math.floor(seed2)) - 0.5) * 14;
      pos[i * 3 + 2] = ((seed3 - Math.floor(seed3)) - 0.5) * 14;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // Slow upward drift
    const pos = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < particleCount; i++) {
      let y = pos.getY(i);
      y += delta * 0.15;
      if (y > 7) y = -7;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;

    // Gentle global rotation
    pointsRef.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#55d1ff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Icosphere />
        <ParticleField />
      </Canvas>
    </div>
  );
}
