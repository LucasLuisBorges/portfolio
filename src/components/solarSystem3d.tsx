import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import terra from '../assets/globe.jpg';
import sol from '../assets/sun.jpg';
import mercury from '../assets/mercury.jpg';
import venus from '../assets/venus.jpg';
import moon from '../assets/moon.jpg';

function Moon() {
  const texture = new THREE.TextureLoader().load(moon);

  return (
    <mesh scale={0.1} position={[-1.3, 0.5, 2.3]}>
      <sphereBufferGeometry attach="geometry" />

      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Terra() {
  const texture = new THREE.TextureLoader().load(terra);

  return (
    <mesh scale={0.5} position={[-0.2, 0.5, 2.3]}>
      <sphereBufferGeometry attach="geometry" />

      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Venus() {
  const texture = new THREE.TextureLoader().load(venus);

  return (
    <mesh scale={0.4} position={[2, 0, 0]}>
      <sphereBufferGeometry attach="geometry" />

      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Mercury() {
  const texture = new THREE.TextureLoader().load(mercury);

  return (
    <mesh scale={0.3} position={[-1.7, 0, 0]}>
      <sphereBufferGeometry attach="geometry" />

      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Sol() {
  const texture = new THREE.TextureLoader().load(sol);

  return (
    <mesh scale={1}>
      <sphereBufferGeometry attach="geometry" />

      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

export function SolarSystem3d() {
  return (
    <Canvas>
      <OrbitControls autoRotate={true} autoRotateSpeed={1} enableZoom={false} />

      <Moon />
      <Terra />
      <Venus />
      <Mercury />
      <Sol />
    </Canvas>
  );
}
