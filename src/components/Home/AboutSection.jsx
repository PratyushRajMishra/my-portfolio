import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function RotatingSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#f59e0b" wireframe />
    </mesh>
  );
}

function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10"
    >
      {/* LEFT: Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-indigo-700 dark:text-orange-400">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m a passionate developer who loves crafting modern, interactive, and animated
          web experiences. My toolbox includes <strong>React</strong>,{" "}
          <strong>TailwindCSS</strong>, <strong>Framer Motion</strong>, and{" "}
          <strong>Three.js</strong>.
        </p>
      </div>

      {/* RIGHT: 3D Model */}
      <div className="flex-1 h-72 w-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <OrbitControls enableZoom={false} />
          <RotatingSphere />
        </Canvas>
      </div>
    </motion.section>
  );
}

export default AboutSection;
