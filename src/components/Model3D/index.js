import React from 'react';
import { Canvas } from '@react-three/fiber';
import ModelView from './ModelView';

export default function Model3D({ modelPath, scale}) {
  
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <spotLight position={[100, 100, 100]} angle={-0.15} />
      <ModelView modelPath={modelPath} scale={scale}/>
    </Canvas>
  );
}