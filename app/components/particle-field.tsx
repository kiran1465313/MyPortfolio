import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import styles from "./particle-field.module.css";

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const elementColors = [
      new THREE.Color(0xff6b35), // pyro
      new THREE.Color(0x4a90e2), // hydro
      new THREE.Color(0x8e4ec6), // electro
      new THREE.Color(0x00c4cc), // cryo
      new THREE.Color(0x2ecc71), // anemo
      new THREE.Color(0xffc100), // geo
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      const color = elementColors[Math.floor(Math.random() * elementColors.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 0.1 + 0.05;
    }

    return { positions, colors, sizes };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      positions[i3] += Math.cos(state.clock.elapsedTime + i) * 0.001;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[particles.sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function ParticleField() {
  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
}
