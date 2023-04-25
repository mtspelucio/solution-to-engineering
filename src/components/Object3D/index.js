import React, { useEffect } from 'react';
import * as THREE from 'three';

import { Container } from './styles';

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';

export default function Object3D() {

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 50, 2, 1, 100 );
        camera.position.z = 50;

        const canvas = document.getElementById('ThreeObject');
        const renderer = new THREE.WebGLRenderer( { canvas, antialias: true } );
        // renderer.setSize( 500, 500 );

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true;
        scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xffffff, 1);
        spotLight.castShadow = true;
        spotLight.position.set(0, 64, 32);
        scene.add(spotLight);

        const geometry = new THREE.BoxGeometry( 20, 20, 20 );
        const material = new THREE.MeshNormalMaterial();
        const mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        // const controls = new OrbitControls(camera, renderer.domElement)

        // const stats = Stats();

        const animate = () => {   
            // mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;  
            // stats.update();
            // controls.update();   
            renderer.render( scene, camera );
            window.requestAnimationFrame(animate)
        };
        animate();
    }, [])

  return (
    <Container id='ThreeObject'>
    </Container>
  );
}