"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Studio Celestial Meridian Armillary Sphere
 * Represents the global studio's connected execution across
 * San Francisco, London, and Tokyo. Features triple-axis counter-rotating
 * gold blueprint meridian rings, an inner refractive obsidian gemstone,
 * and physics-driven harmonic acceleration upon hover and click.
 */
function StudioArmillary() {
  const rootRef = useRef();
  const ring1Ref = useRef(); // Prime Meridian (London)
  const ring2Ref = useRef(); // Pacific Meridian (San Francisco)
  const ring3Ref = useRef(); // Asian Meridian (Tokyo)
  const gemRef = useRef();
  const innerCoreRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (!rootRef.current) return;
    const time = state.clock.getElapsedTime();

    // Responsive spin acceleration
    const speed = clicked ? 2.8 : hovered ? 1.4 : 0.45;

    // Levitation
    rootRef.current.position.y = Math.sin(time * 1.5) * 0.1;

    // Outer slow yaw
    rootRef.current.rotation.y += delta * 0.15;

    // Ring 1: London Prime Meridian (Gold blueprint)
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * (speed * 0.9);
      ring1Ref.current.rotation.x += delta * (speed * 0.3);
    }

    // Ring 2: SF Pacific Meridian (Deep sapphire titanium)
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * (speed * 1.1);
      ring2Ref.current.rotation.z -= delta * (speed * 0.4);
    }

    // Ring 3: Tokyo Meridian (Electric cyan orbital)
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * (speed * 0.8);
      ring3Ref.current.rotation.y += delta * (speed * 0.5);
    }

    // Central refractive gem slow counter-turn
    if (gemRef.current) {
      gemRef.current.rotation.y -= delta * (speed * 0.7);
      gemRef.current.rotation.x += delta * (speed * 0.4);
      const pulse = 1.0 + Math.sin(time * 3.0) * (hovered ? 0.15 : 0.08);
      gemRef.current.scale.setScalar(pulse);
    }

    // Inner wireframe nucleus
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.z += delta * (speed * 1.5);
    }
  });

  return (
    <group
      ref={rootRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => {
        setHovered(false);
        setClicked(false);
      }}
      onClick={() => setClicked(!clicked)}
    >
      {/* ── Ring 1: Primary Meridian (London 0° GMT) ── Gold */}
      <mesh ref={ring1Ref} scale={1.85}>
        <torusGeometry args={[1, 0.022, 16, 96]} />
        <meshStandardMaterial
          color={hovered ? "#ffd700" : "#d4af37"}
          emissive="#d4af37"
          emissiveIntensity={hovered ? 1.2 : 0.6}
          roughness={0.15}
          metalness={0.95}
        />
      </mesh>

      {/* ── Ring 2: Equatorial / Pacific (San Francisco PST) ── Titanium/Royal Blue */}
      <mesh ref={ring2Ref} scale={1.55} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.018, 16, 96]} />
        <meshPhysicalMaterial
          color="#1e3a8a"
          emissive="#2563eb"
          emissiveIntensity={hovered ? 0.9 : 0.45}
          roughness={0.18}
          metalness={0.92}
          clearcoat={1.0}
        />
      </mesh>

      {/* ── Ring 3: Asian Meridian (Tokyo JST) ── Electric Cyan */}
      <mesh ref={ring3Ref} scale={1.28} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1, 0.015, 16, 96]} />
        <meshStandardMaterial
          color="#55d1ff"
          emissive="#55d1ff"
          emissiveIntensity={hovered ? 1.6 : 0.85}
          roughness={0.2}
          metalness={0.88}
        />
      </mesh>

      {/* ── Centerpiece: Chiseled Refractive Obsidian Gem ── */}
      <mesh ref={gemRef} scale={0.65} castShadow>
        <dodecahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#080e18"
          emissive={hovered ? "#38bdf8" : "#1a365d"}
          emissiveIntensity={hovered ? 0.9 : 0.4}
          roughness={0.08}
          metalness={0.95}
          clearcoat={1.0}
          clearcoatRoughness={0.06}
          reflectivity={0.98}
        />
      </mesh>

      {/* ── Inner Glowing Wireframe Quantum Core ── */}
      <mesh ref={innerCoreRef} scale={0.38}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#d4af37"
          emissive="#d4af37"
          emissiveIntensity={2.0}
          wireframe
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
      { threshold: 0.05, rootMargin: "150px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-56 h-56 sm:w-72 sm:h-72 mx-auto relative pointer-events-auto cursor-pointer"
      title="Click or hover to accelerate global orbital alignment"
    >
      <Canvas
        frameloop={isVisible ? "always" : "never"}
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[4, 5, 4]} intensity={2.0} color="#ffffff" />
        <pointLight position={[3, 4, 3]} intensity={4.5} color="#55d1ff" distance={8} />
        <pointLight position={[-3, -3, 2]} intensity={3.5} color="#d4af37" distance={8} />
        <pointLight position={[0, -2, -2]} intensity={3.0} color="#2563eb" distance={6} />
        <StudioArmillary />
      </Canvas>
    </div>
  );
}
