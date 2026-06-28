import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Simplified line component without mouse interaction
const StaticLine = ({ initialPoints, color, lineWidth }) => {
  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(initialPoints);
  }, [initialPoints]);

  return (
    <line>
      <primitive attach="geometry" object={geometry} />
      <lineBasicMaterial attach="material" color={color} linewidth={lineWidth} />
    </line>
  );
};


const Globe = () => {
  const ref = useRef();
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.rotation.y = elapsedTime / 4;
    ref.current.rotation.x = Math.sin(elapsedTime / 2) / 8;
    ref.current.position.y = Math.sin(elapsedTime / 1.5) / 10;
  });

  const lines = useMemo(() => {
    const lineData = [];
    const numLines = 30;
    const radius = 1;
  
    for (let i = 0; i < numLines; i++) {
      const angle = (i / numLines) * Math.PI;
      const points = [];
      for (let j = 0; j <= 100; j++) {
        const subAngle = (j / 100) * Math.PI * 2;
        points.push(new THREE.Vector3(
          Math.sin(angle) * Math.cos(subAngle) * radius,
          Math.cos(angle) * radius,
          Math.sin(angle) * Math.sin(subAngle) * radius,
        ));
      }
      const color = i % 4 === 0 ? '#4A90E2' : 'rgba(255, 255, 255, 0.2)';
      const lineWidth = i % 4 === 0 ? 1 : 0.5;
      lineData.push({ id: `v-${i}`, points, color, lineWidth });
    }
    return lineData;
  }, []);


  return (
    <group ref={ref} scale={[1.5, 1.5, 1.5]} position={[1.2, 0, 0]}>
      <Sphere args={[1, 64, 64]}>
        <meshBasicMaterial color="black" transparent opacity={0.05} />
      </Sphere>
      {lines.map(line => (
        <StaticLine key={line.id} initialPoints={line.points} color={line.color} lineWidth={line.lineWidth} />
      ))}
    </group>
  );
};

const GlobeAnimation = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <Globe />
    </Canvas>
  );
};

export default GlobeAnimation;
