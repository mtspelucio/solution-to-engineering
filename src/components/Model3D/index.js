import React from 'react';
import { Canvas } from '@react-three/fiber';
import ModelView from './ModelView';

export default function Model3D({ modelPath}) {
  
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[100, 100, 100]} angle={0.15} />
      <ModelView modelPath={modelPath} />
    </Canvas>
  );
}