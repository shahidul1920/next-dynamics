"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function InteractivePrism() {
  const meshRef = useRef();
  const ringRef = useRef();
  const innerRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    // Spin speed accelerates on hover / click
    const spinSpeed = clicked ? 3.0 : hovered ? 1.2 : 0.35;
    meshRef.current.rotation.y += delta * spinSpeed;
    meshRef.current.rotation.x += delta * (spinSpeed * 0.5);

    // Floating breathing bob
    meshRef.current.position.y = Math.sin(time * 2.0) * 0.12;

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * (spinSpeed * 0.8);
      ringRef.current.rotation.x -= delta * (spinSpeed * 0.4);
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * (spinSpeed * 1.5);
      const pulse = 0.9 + Math.sin(time * 4) * 0.15;
      innerRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => {
        setHovered(false);
        setClicked(false);
      }}
      onClick={() => setClicked(!clicked)}
    >
      {/* Liquid Obsidian Polyhedron */}
      <mesh ref={meshRef} scale={1.75} castShadow>
        <dodecahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color={hovered ? "#0f172a" : "#080e18"}
          emissive={hovered ? "#38bdf8" : "#1e40af"}
          emissiveIntensity={hovered ? 0.8 : 0.35}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={0.95}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh ref={innerRef} scale={0.9}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#55d1ff"
          emissive="#55d1ff"
          emissiveIntensity={hovered ? 2.5 : 1.2}
          wireframe
        />
      </mesh>

      {/* Orbiting Gyro Blueprint Ring */}
      <mesh ref={ringRef} scale={2.8}>
        <torusGeometry args={[1, 0.02, 16, 80]} />
        <meshStandardMaterial
          color={hovered ? "#55d1ff" : "#d4af37"}
          emissive={hovered ? "#55d1ff" : "#d4af37"}
          emissiveIntensity={hovered ? 1.0 : 0.6}
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>
    </group>
  );
}

export default function Footer3DCanvas() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "200px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-56 h-56 sm:w-72 sm:h-72 mx-auto relative pointer-events-auto cursor-pointer"
    >
      <Canvas
        frameloop={isVisible ? "always" : "never"}
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 4]} intensity={1.8} color="#ffffff" />
        <pointLight position={[3, 4, 3]} intensity={4} color="#55d1ff" distance={8} />
        <pointLight position={[-3, -3, 2]} intensity={3} color="#d4af37" distance={8} />
        <pointLight position={[0, -2, -2]} intensity={2.5} color="#2563eb" distance={6} />
        <InteractivePrism />
      </Canvas>
    </div>
  );
}
