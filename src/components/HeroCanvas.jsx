"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Icosphere() {
  const meshRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  // Track mouse for parallax
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    });
  }

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

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < particleCount; i++) {
      posAttr.array[i * 3 + 1] += delta * 0.05;
      if (posAttr.array[i * 3 + 1] > 7) {
        posAttr.array[i * 3 + 1] = -7;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#55d1ff"
        size={1.5}
        transparent
        opacity={0.25}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <Icosphere />
        <ParticleField />
      </Canvas>
    </div>
  );
}
