"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function KineticSculpture() {
  const meshRef = useRef();
  const ringRef = useRef();
  const [hovered, setHovered] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    // Constant slow majestic rotation
    meshRef.current.rotation.y += delta * (hovered ? 0.8 : 0.25);
    meshRef.current.rotation.x += delta * (hovered ? 0.4 : 0.15);

    // Subtle breathing float
    meshRef.current.position.y = Math.sin(time * 1.5) * 0.15;

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.3;
      ringRef.current.rotation.x -= delta * 0.2;
    }
  });

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Central Faceted Monogram Polyhedron */}
      <mesh ref={meshRef} scale={1.8}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={hovered ? "#55d1ff" : "#1e3a8a"}
          emissive={hovered ? "#38bdf8" : "#1d4ed8"}
          emissiveIntensity={hovered ? 0.9 : 0.4}
          roughness={0.15}
          metalness={0.85}
          wireframe={false}
        />
      </mesh>

      {/* Orbiting Golden Gyro Ring */}
      <mesh ref={ringRef} scale={2.6}>
        <torusGeometry args={[1, 0.02, 16, 80]} />
        <meshStandardMaterial
          color="#d4af37"
          emissive="#d4af37"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

export default function Footer3DCanvas() {
  return (
    <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto relative pointer-events-auto cursor-pointer">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 5, 4]} intensity={2.5} color="#55d1ff" />
        <pointLight position={[-4, -4, 2]} intensity={2} color="#d4af37" />
        <directionalLight position={[0, 4, 3]} intensity={1.2} />
        <KineticSculpture />
      </Canvas>
    </div>
  );
}
