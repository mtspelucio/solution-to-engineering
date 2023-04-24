import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model3D() {
  const gift = useGLTF('./GiftBox.gltf');

  return(
    <>
      <primitive object={gift.scene} />
    </>
  );
}

