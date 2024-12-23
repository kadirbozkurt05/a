import React from 'react';
import { Vector3 } from 'three';
import { Html } from '@react-three/drei';

interface PlanetProps {
  position: Vector3;
  radius: number;
  color: string;
  orbitRadius: number;
  name: string;
}

const Planet: React.FC<PlanetProps> = ({ position, radius, color, orbitRadius, name }) => {
  return (
    <group>
      {/* Orbit line */}
      <line>
        <bufferGeometry>
          <float32BufferAttribute
            attach="attributes-position"
            count={64}
            array={new Float32Array(
              Array.from({ length: 65 }, (_, i) => {
                const angle = (i / 32) * Math.PI * 2;
                return [
                  Math.cos(angle) * orbitRadius,
                  0,
                  Math.sin(angle) * orbitRadius,
                ];
              }).flat()
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#666666" opacity={0.3} transparent />
      </line>

      {/* Planet */}
      <mesh position={position}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} />
        <Html
          position={[0, radius + 2, 0]}
          center
          style={{
            color: 'white',
            background: 'rgba(0,0,0,0.5)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '12px',
            userSelect: 'none',
          }}
        >
          {name}
        </Html>
      </mesh>
    </group>
  );
};

export default Planet;