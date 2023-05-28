import React, { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';
import GltfModel from "./gltf";

export default function ModelView({ modelPath, scale, position = [0, 0, -5] }) {
    return(
        <Suspense fallback={null} className="teste">
           <GltfModel modelPath={modelPath} scale={scale} position={position}/> 
            {/* <OrbitControls /> */}
        </Suspense>
    );
}