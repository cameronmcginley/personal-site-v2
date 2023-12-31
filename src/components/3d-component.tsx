import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import * as THREE from "three";

const My3DTiltComponent = () => {
  const tiltRef = useRef(null);
  const threeContainerRef = useRef(null);

  useEffect(() => {
    // Basic Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      threeContainerRef.current.clientWidth /
        threeContainerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setSize(
      threeContainerRef.current.clientWidth,
      threeContainerRef.current.clientHeight
    );
    threeContainerRef.current.appendChild(renderer.domElement);

    // Box geometry with image on the front and black sides
    const texture = new THREE.TextureLoader().load("/headshot.webp"); // Replace with path to your image
    const geometry = new THREE.BoxGeometry(5, 3, 1); // Increase the depth for better 3D effect
    const materials = [
      new THREE.MeshBasicMaterial({ color: "black" }), // Left side
      new THREE.MeshBasicMaterial({ color: "black" }), // Right side
      new THREE.MeshBasicMaterial({ color: "black" }), // Top side
      new THREE.MeshBasicMaterial({ color: "black" }), // Bottom side
      new THREE.MeshBasicMaterial({ map: texture }), // Front side with image
      new THREE.MeshBasicMaterial({ color: "black" }), // Back side
    ];
    const box = new THREE.Mesh(geometry, materials);
    scene.add(box);

    // Camera position
    camera.position.z = 10; // Adjust as needed to fit the box in view

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function to run when component unmounts
    return () => {
      threeContainerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  // Handle tilt change
  const handleTiltChange = (event) => {
    const { tiltX, tiltY } = event.detail;
    // Apply tilt values to box rotation
    const box = scene.children[0]; // Assuming it's your box
    if (box) {
      box.rotation.y = THREE.MathUtils.degToRad(tiltX * 0.5); // Adjust rotation sensitivity if needed
      box.rotation.x = -THREE.MathUtils.degToRad(tiltY * 0.5); // Adjust rotation sensitivity if needed
    }
  };

  return (
    <Tilt tiltReverse={true} onTiltChange={handleTiltChange}>
      <div
        ref={tiltRef}
        style={{ height: "300px", width: "300px", position: "relative" }}
      >
        <div
          ref={threeContainerRef}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </Tilt>
  );
};

export default My3DTiltComponent;
