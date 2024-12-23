import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { usePlanets } from './PlanetsContext';
import Planet from './Planet';
import { PLANET_DATA } from './planetData';

const Planets = () => {
  const { positions, updatePositions } = usePlanets();

  useFrame((_, delta) => {
    updatePositions(delta);
  });

  return (
    <group>
      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshBasicMaterial color="#FDB813" />
        <Html
          position={[0, 12, 0]}
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
          Güneş
        </Html>
      </mesh>

      {/* Planets */}
      {PLANET_DATA.map((planet, index) => (
        <Planet
          key={planet.name}
          name={planet.name}
          position={positions[index]}
          radius={planet.radius}
          color={planet.color}
          orbitRadius={planet.orbitRadius}
        />
      ))}
    </group>
  );
};

export default Planets;