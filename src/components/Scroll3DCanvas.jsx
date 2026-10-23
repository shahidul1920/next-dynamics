"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Architectural Monogram Sculpture with multi-layered geometric rings,
 * inner glowing core, and scroll-linked spatial transformation.
 */
function ArchitecturalSculpture({ progressRef, mouseRef }) {
  const groupRef = useRef();
  const innerCoreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const wireframeCageRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Current scroll progress [0..1]
    const progress = progressRef?.current || 0;

    // Mouse parallax target
    const targetMouseX = (mouseRef?.current?.x || 0) * 0.4;
    const targetMouseY = (mouseRef?.current?.y || 0) * 0.4;

    // Base continuous slow ambient float
    const time = state.clock.getElapsedTime();

    // Scroll-driven rotations & morphs
    // At progress 0 (Chapter 1): Facing camera, balanced
    // At progress 0.5 (Chapter 2): Tilted, rings expand outward
    // At progress 1.0 (Chapter 3): Rotated dramatically, close to camera, core pulsing
    const scrollRotY = progress * Math.PI * 2.2;
    const scrollRotX = progress * Math.PI * 0.8;
    const scrollScale = 1 + progress * 0.4;

    // Smooth lerp group rotation with mouse parallax
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      scrollRotY + targetMouseX + time * 0.05,
      0.08
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      scrollRotX + targetMouseY + Math.sin(time * 0.5) * 0.05,
      0.08
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      progress * 0.5 + Math.cos(time * 0.3) * 0.03,
      0.08
    );

    // Group position moves slightly in 3D space along scroll
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      (progress - 0.5) * -1.2,
      0.08
    );
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      Math.sin(progress * Math.PI) * 0.8,
      0.08
    );

    // Inner core rotation & pulsation
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.4;
      innerCoreRef.current.rotation.z += delta * 0.2;
      const pulse = 1 + Math.sin(time * 2.5) * 0.08 + progress * 0.25;
      innerCoreRef.current.scale.set(pulse, pulse, pulse);
    }

    // Outer rings rotate opposite directions and expand based on scroll
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.3;
      ring1Ref.current.rotation.y += delta * 0.15;
      const ringScale = 1.6 + progress * 0.6;
      ring1Ref.current.scale.set(ringScale, ringScale, ringScale);
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.25;
      ring2Ref.current.rotation.z += delta * 0.35;
      const ringScale2 = 2.1 + progress * 0.8;
      ring2Ref.current.scale.set(ringScale2, ringScale2, ringScale2);
    }

    // Wireframe polyhedral cage
    if (wireframeCageRef.current) {
      wireframeCageRef.current.rotation.y += delta * 0.08;
      const cageScale = 2.8 + Math.sin(progress * Math.PI) * 0.5;
      wireframeCageRef.current.scale.set(cageScale, cageScale, cageScale);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Inner Refractive Faceted Gem (Core) */}
      <mesh ref={innerCoreRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#1e3a8a"
          emissive="#2563eb"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>

      {/* 2. Primary Gyroscope Ring (Electric Cyan) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#55d1ff"
          emissive="#55d1ff"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 3. Secondary Gyroscope Ring (Blueprint Gold accent) */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#d4af37"
          emissive="#d4af37"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* 4. Outer Wireframe Polyhedral Lattice */}
      <mesh ref={wireframeCageRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#55d1ff"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}

/**
 * Volumetric Particle Tunnel that reacts to scroll scrub
 */
function ParticleTunnel({ progressRef }) {
  const pointsRef = useRef();
  const particleCount = 1200;

  const [positions, initialZ] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const zArray = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      // Cylinder distribution along Z-axis
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.5 + Math.random() * 6.5;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 24;
      pos[i * 3 + 2] = z;
      zArray[i] = z;
    }
    return [pos, zArray];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const progress = progressRef?.current || 0;
    const posAttr = pointsRef.current.geometry.attributes.position;

    // Particles stream towards camera, speed modulated by scroll progress
    const speed = 0.8 + progress * 3.5;

    for (let i = 0; i < particleCount; i++) {
      let z = posAttr.array[i * 3 + 2] + delta * speed;
      if (z > 10) {
        z = -14;
      }
      posAttr.array[i * 3 + 2] = z;
    }
    posAttr.needsUpdate = true;

    // Rotate particle cloud gently
    pointsRef.current.rotation.z += delta * 0.02 * (1 + progress);
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
        color="#7dd3fc"
        size={0.035}
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/**
 * Camera Controller hooked to scroll progress
 */
function CameraRig({ progressRef, mouseRef }) {
  useFrame((state) => {
    const progress = progressRef?.current || 0;
    const targetX = (mouseRef?.current?.x || 0) * 0.5;
    const targetY = (mouseRef?.current?.y || 0) * 0.5;

    // Camera zooms inward along Z as user scrolls down:
    // Starts at z=6.5 -> zooms in to z=3.8 at peak
    const targetZ = 6.5 - progress * 2.8;

    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      targetZ,
      0.06
    );
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      targetX + Math.sin(progress * Math.PI) * 0.4,
      0.06
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      targetY - progress * 0.3,
      0.06
    );

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scroll3DCanvas({ progressRef }) {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <CameraRig progressRef={progressRef} mouseRef={mouseRef} />

        {/* Dynamic Studio Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-4, -3, 3]} intensity={2.5} color="#2563eb" />
        <pointLight position={[3, 2, 4]} intensity={3.5} color="#55d1ff" />
        <pointLight position={[0, 0, -2]} intensity={2} color="#d4af37" />

        {/* 3D Geometry & Particles */}
        <ArchitecturalSculpture progressRef={progressRef} mouseRef={mouseRef} />
        <ParticleTunnel progressRef={progressRef} />
      </Canvas>
    </div>
  );
}
