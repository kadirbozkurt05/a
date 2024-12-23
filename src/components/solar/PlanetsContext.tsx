import React, { createContext, useContext, useState, useCallback } from 'react';
import { Vector3 } from 'three';
import { PLANET_DATA } from './planetData';

interface PlanetsContextType {
  positions: Vector3[];
  updatePositions: (delta: number) => void;
}

const PlanetsContext = createContext<PlanetsContextType | null>(null);

export const usePlanets = () => {
  const context = useContext(PlanetsContext);
  if (!context) {
    throw new Error('usePlanets must be used within a PlanetsProvider');
  }
  return context;
};

interface PlanetsProviderProps {
  children: React.ReactNode;
  isPlaying: boolean;
}

export const PlanetsProvider: React.FC<PlanetsProviderProps> = ({ children, isPlaying }) => {
  const [positions, setPositions] = useState<Vector3[]>(
    PLANET_DATA.map(planet => new Vector3(planet.orbitRadius, 0, 0))
  );

  const [angles, setAngles] = useState<number[]>(
    PLANET_DATA.map(() => 0)
  );

  const updatePositions = useCallback((delta: number) => {
    if (!isPlaying) return;

    setAngles(prevAngles =>
      prevAngles.map((angle, index) => {
        const speed = PLANET_DATA[index].orbitalSpeed;
        return angle + speed * delta;
      })
    );

    setPositions(prevPositions =>
      prevPositions.map((_, index) => {
        const planet = PLANET_DATA[index];
        const angle = angles[index];
        return new Vector3(
          Math.cos(angle) * planet.orbitRadius,
          0,
          Math.sin(angle) * planet.orbitRadius
        );
      })
    );
  }, [isPlaying, angles]);

  return (
    <PlanetsContext.Provider value={{ positions, updatePositions }}>
      {children}
    </PlanetsContext.Provider>
  );
};