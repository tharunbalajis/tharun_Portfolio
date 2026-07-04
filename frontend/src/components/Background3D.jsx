import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Particles({ count = 1500 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.045;
      ref.current.rotation.y = state.clock.elapsedTime * 0.065;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FF9A1F"
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.55}
        />
      </Points>
    </group>
  );
}

function FloatingMesh({ position, color, geometry, speed = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    ref.current.rotation.y = Math.cos(t * 0.2) * 0.2;
    ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.25;
  });
  return (
    <mesh ref={ref} position={position}>
      {geometry === 'icosahedron' ? (
        <icosahedronGeometry args={[0.8, 0]} />
      ) : (
        <octahedronGeometry args={[0.6, 0]} />
      )}
      <meshStandardMaterial color={color} wireframe transparent opacity={0.28} />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingMesh position={[2, 0, -2]}   color="#FF9A1F" geometry="icosahedron" speed={1} />
        <FloatingMesh position={[-2.5, 1, -1.5]} color="#F5820B" geometry="octahedron"  speed={0.8} />
      </Canvas>
    </div>
  );
}
