import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Planets from './Planets';
import { PlanetsProvider } from './PlanetsContext';

interface SolarSystemProps {
  isPlaying: boolean;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ isPlaying }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="w-full h-[600px] bg-black rounded-lg overflow-hidden">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 100, 200], fov: 45 }}
        style={{ background: '#000000' }}
      >
        <PlanetsProvider isPlaying={isPlaying}>
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />
          <Planets />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </PlanetsProvider>
      </Canvas>
    </div>
  );
};

export default SolarSystem;