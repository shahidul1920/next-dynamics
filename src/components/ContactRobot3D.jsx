"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * 3D Cybernetic Architect Sentinel Head & Hand
 * Tracks mouse cursor in real-time, tilts with spring physics,
 * and waves upon greeting trigger.
 */
function ArchitectSentinel({ isWaving, onWaveEnd, mouseCoord }) {
  const headGroupRef = useRef();
  const visorRef = useRef();
  const leftEarRef = useRef();
  const rightEarRef = useRef();
  const armRef = useRef();

  // Wave animation timer
  const waveTime = useRef(0);

  useFrame((state, delta) => {
    if (!headGroupRef.current) return;
    const time = state.clock.getElapsedTime();

    // 1. Mouse Head Tracking (Sentinel looks directly at the mouse cursor!)
    const mx = mouseCoord?.current?.x || 0;
    const my = mouseCoord?.current?.y || 0;

    // Smooth lerp head rotation toward pointer
    headGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      headGroupRef.current.rotation.y,
      mx * 0.75,
      0.08
    );
    headGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      headGroupRef.current.rotation.x,
      -my * 0.55 + Math.sin(time * 1.5) * 0.04,
      0.08
    );
    headGroupRef.current.rotation.z = THREE.MathUtils.lerp(
      headGroupRef.current.rotation.z,
      -mx * 0.2,
      0.08
    );

    // Subtle breathing float
    headGroupRef.current.position.y = Math.sin(time * 2.0) * 0.08;

    // 2. Glowing Visor Pulse
    if (visorRef.current) {
      const visorPulse = 1.4 + Math.sin(time * 4) * 0.4;
      visorRef.current.material.emissiveIntensity = visorPulse;
    }

    // 3. Ear Pods rotation
    if (leftEarRef.current) leftEarRef.current.rotation.z += delta * 0.5;
    if (rightEarRef.current) rightEarRef.current.rotation.z -= delta * 0.5;

    // 4. Robotic Hand Wave Interaction
    if (armRef.current) {
      if (isWaving) {
        waveTime.current += delta * 6;
        // Waving motion
        armRef.current.position.y = THREE.MathUtils.lerp(armRef.current.position.y, 0.2, 0.15);
        armRef.current.rotation.z = Math.sin(waveTime.current) * 0.45 + 0.3;
        armRef.current.rotation.x = -0.4;

        if (waveTime.current > Math.PI * 5) {
          waveTime.current = 0;
          onWaveEnd?.();
        }
      } else {
        // Rest position (hidden slightly below)
        armRef.current.position.y = THREE.MathUtils.lerp(armRef.current.position.y, -1.8, 0.1);
        armRef.current.rotation.z = THREE.MathUtils.lerp(armRef.current.rotation.z, 0, 0.1);
      }
    }
  });

  return (
    <group position={[0, -0.2, 0]}>
      {/* ── Head Assembly ── */}
      <group ref={headGroupRef}>
        {/* Sleek Obsidian Helmet Dome */}
        <mesh position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[1.05, 32, 24]} />
          <meshPhysicalMaterial
            color="#080e18"
            emissive="#1e3a8a"
            emissiveIntensity={0.25}
            roughness={0.1}
            metalness={0.92}
            clearcoat={1.0}
            clearcoatRoughness={0.06}
          />
        </mesh>

        {/* Angular Jaw / Chin Chiseled Guard */}
        <mesh position={[0, -0.65, 0.45]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[0.9, 0.55, 0.7]} />
          <meshStandardMaterial
            color="#0f1b2d"
            roughness={0.18}
            metalness={0.88}
          />
        </mesh>

        {/* Luminous Electric Cyan Visor (The Sentinel's Eyes) */}
        <mesh ref={visorRef} position={[0, 0.1, 0.88]}>
          <boxGeometry args={[1.2, 0.26, 0.35]} />
          <meshStandardMaterial
            color="#55d1ff"
            emissive="#55d1ff"
            emissiveIntensity={1.8}
            roughness={0.1}
            metalness={0.5}
          />
        </mesh>

        {/* Left Articulated Ear Pod */}
        <mesh ref={leftEarRef} position={[-1.15, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.24, 0.24, 0.2, 16]} />
          <meshStandardMaterial
            color="#d4af37"
            emissive="#d4af37"
            emissiveIntensity={0.5}
            metalness={0.95}
          />
        </mesh>

        {/* Right Articulated Ear Pod */}
        <mesh ref={rightEarRef} position={[1.15, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.24, 0.24, 0.2, 16]} />
          <meshStandardMaterial
            color="#d4af37"
            emissive="#d4af37"
            emissiveIntensity={0.5}
            metalness={0.95}
          />
        </mesh>

        {/* Overhead Halo Sensor Ring */}
        <mesh position={[0, 1.15, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.4, 0.02, 16, 48]} />
          <meshStandardMaterial
            color="#55d1ff"
            emissive="#55d1ff"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {/* ── Articulated Waving Arm / Hand ── */}
      <group ref={armRef} position={[1.35, -1.8, 0.6]}>
        {/* Forearm */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 1.1, 16]} />
          <meshPhysicalMaterial
            color="#0f1b2d"
            roughness={0.15}
            metalness={0.9}
            clearcoat={1.0}
          />
        </mesh>

        {/* Palm & Metallic Fingers */}
        <mesh position={[0, 1.25, 0]}>
          <boxGeometry args={[0.3, 0.35, 0.1]} />
          <meshStandardMaterial
            color="#55d1ff"
            emissive="#55d1ff"
            emissiveIntensity={0.4}
            metalness={0.9}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function ContactRobot3D({ isWaving = false, onWaveEnd }) {
  const containerRef = useRef(null);
  const mouseCoord = useRef({ x: 0, y: 0 });
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
        camera={{ position: [0, 0.1, 4.2], fov: 45 }}
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
        <directionalLight position={[4, 6, 4]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-3, 2, 3]} intensity={4.0} color="#2563eb" distance={8} />
        <pointLight position={[3, -2, 3]} intensity={5.0} color="#55d1ff" distance={8} />
        <pointLight position={[0, 4, -2]} intensity={2.5} color="#d4af37" distance={6} />

        <ArchitectSentinel
          isWaving={isWaving}
          onWaveEnd={onWaveEnd}
          mouseCoord={mouseCoord}
        />
      </Canvas>
    </div>
  );
}
