import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function ThreeDScene() {
  return (
    <div className="h-72 w-full">
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default ThreeDScene;
