"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Architectural Neural Matrix (High-Velocity Systems Core)
 * Replaces the cartoonish sentinel robot with an elite, mathematical
 * 3D architectural node matrix featuring physics-driven mouse tracking,
 * orbital blueprint rings, and interactive network pulse telemetry.
 */
function SystemMatrix({ isPulsing, onPulseEnd, mouseCoord }) {
  const rootGroupRef = useRef();
  const coreRef = useRef();
  const innerRef = useRef();
  const goldRingRef = useRef();
  const cyanRingRef = useRef();
  const satelliteGroupRef = useRef();

  // Pulse animation progress
  const pulseTime = useRef(0);

  // Generate 8 satellite architectural nodes with fixed deterministic positions
  const satelliteNodes = useMemo(() => {
    const nodes = [];
    const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
    const coords = [
      [1, 1, 1],
      [1, -1, 1],
      [-1, 1, 1],
      [-1, -1, 1],
      [0, 1 / phi, phi],
      [0, -1 / phi, phi],
      [phi, 0, 1 / phi],
      [-phi, 0, 1 / phi],
    ];

    coords.forEach(([x, y, z], i) => {
      const vec = new THREE.Vector3(x, y, z).normalize().multiplyScalar(1.55);
      nodes.push({
        id: i,
        pos: [vec.x, vec.y, vec.z],
        basePos: vec,
      });
    });
    return nodes;
  }, []);

  useFrame((state, delta) => {
    if (!rootGroupRef.current) return;
    const time = state.clock.getElapsedTime();

    // 1. Mouse Head Tracking with Spring Lerp
    const mx = mouseCoord?.current?.x || 0;
    const my = mouseCoord?.current?.y || 0;

    rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      rootGroupRef.current.rotation.y,
      mx * 0.85 + Math.sin(time * 0.6) * 0.08,
      0.06
    );
    rootGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      rootGroupRef.current.rotation.x,
      -my * 0.6 + Math.cos(time * 0.8) * 0.06,
      0.06
    );

    // Subtle levitation
    rootGroupRef.current.position.y = Math.sin(time * 1.8) * 0.08;

    // 2. Orbital Blueprint Rings Spin
    if (goldRingRef.current) {
      goldRingRef.current.rotation.z += delta * 0.45;
      goldRingRef.current.rotation.x += delta * 0.2;
    }
    if (cyanRingRef.current) {
      cyanRingRef.current.rotation.y -= delta * 0.55;
      cyanRingRef.current.rotation.z += delta * 0.15;
    }

    // 3. Core Slow Torsion
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.35;
      coreRef.current.rotation.x -= delta * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.6;
      const pulse = 1.0 + Math.sin(time * 3.5) * 0.12;
      innerRef.current.scale.setScalar(pulse);
    }

    // 4. Satellite Nodes Float & Breathing
    if (satelliteGroupRef.current) {
      satelliteGroupRef.current.rotation.y += delta * 0.25;
      satelliteGroupRef.current.rotation.x += delta * 0.12;
    }

    // 5. Interactive Network Pulse Transmission
    if (isPulsing) {
      pulseTime.current += delta * 4.5;
      const wave = Math.sin(pulseTime.current);

      if (coreRef.current) {
        coreRef.current.scale.setScalar(1.0 + Math.max(0, wave * 0.25));
      }
      if (goldRingRef.current) {
        goldRingRef.current.scale.setScalar(1.0 + Math.max(0, wave * 0.3));
      }

      if (pulseTime.current >= Math.PI * 2) {
        pulseTime.current = 0;
        if (coreRef.current) coreRef.current.scale.setScalar(1.0);
        if (goldRingRef.current) goldRingRef.current.scale.setScalar(1.0);
        onPulseEnd?.();
      }
    }
  });

  return (
    <group ref={rootGroupRef} position={[0, 0, 0]}>
      {/* ── 1. Central Chiseled Obsidian Gem Core ── */}
      <mesh ref={coreRef} scale={1.1} castShadow>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#080e18"
          emissive="#1e3a8a"
          emissiveIntensity={0.65}
          roughness={0.12}
          metalness={0.92}
          clearcoat={1.0}
          clearcoatRoughness={0.08}
          reflectivity={0.95}
        />
      </mesh>

      {/* ── 2. Inner Radiant Crystalline Wireframe ── */}
      <mesh ref={innerRef} scale={0.72}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#55d1ff"
          emissive="#55d1ff"
          emissiveIntensity={1.8}
          wireframe
        />
      </mesh>

      {/* ── 3. Precision Gold Blueprint Meridian Ring ── */}
      <mesh ref={goldRingRef} scale={1.75}>
        <torusGeometry args={[1, 0.018, 16, 96]} />
        <meshStandardMaterial
          color="#d4af37"
          emissive="#d4af37"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>

      {/* ── 4. Precision Cyan Orbital Ring ── */}
      <mesh ref={cyanRingRef} scale={2.05} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1, 0.012, 16, 96]} />
        <meshStandardMaterial
          color="#55d1ff"
          emissive="#55d1ff"
          emissiveIntensity={0.8}
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* ── 5. Orbiting Architectural Satellite Nodes ── */}
      <group ref={satelliteGroupRef}>
        {satelliteNodes.map((node) => (
          <group key={node.id} position={node.pos}>
            <mesh scale={0.11}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial
                color="#f3f1ec"
                emissive="#d4af37"
                emissiveIntensity={0.9}
                roughness={0.15}
                metalness={0.9}
              />
            </mesh>
            {/* Fine beacon glow halo */}
            <mesh scale={0.18}>
              <sphereGeometry args={[1, 12, 12]} />
              <meshBasicMaterial
                color="#55d1ff"
                transparent
                opacity={0.25}
                wireframe
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

export default function ContactRobot3D({
  isWaving = false,
  onWaveEnd,
  isPulsing,
  onPulseEnd,
}) {
  const containerRef = useRef(null);
  const mouseCoord = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Fallback support for both prop names
  const activePulse = isPulsing ?? isWaving;
  const handlePulseEnd = onPulseEnd ?? onWaveEnd;

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseCoord.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseCoord.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-72 sm:h-80 relative pointer-events-auto"
    >
      <Canvas
        frameloop={isVisible ? "always" : "never"}
        camera={{ position: [0, 0, 4.4], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 4]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-3, 2, 3]} intensity={4.5} color="#2563eb" distance={8} />
        <pointLight position={[3, -2, 3]} intensity={5.0} color="#55d1ff" distance={8} />
        <pointLight position={[0, 4, -2]} intensity={3.5} color="#d4af37" distance={7} />

        <SystemMatrix
          isPulsing={activePulse}
          onPulseEnd={handlePulseEnd}
          mouseCoord={mouseCoord}
        />
      </Canvas>
    </div>
  );
}
