import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function GltfModel({ modelPath, scale, position }) {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);

    useFrame((state, delta) => {
        ref.current.rotation.y += 0.01
    });

    return(
        <primitive 
            ref={ref}
            object={gltf.scene}
            scale={scale}
            position={position}        
        />
    );
}