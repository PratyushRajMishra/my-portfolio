import React from "react";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto px-6 py-16 text-center"
    >
      <h2 className="text-3xl font-bold text-indigo-700 dark:text-orange-400">
        About Me
      </h2>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m a passionate developer who loves crafting modern, interactive, and animated web
        experiences. My toolbox includes <strong>React</strong>, <strong>TailwindCSS</strong>,{" "}
        <strong>Framer Motion</strong>, and <strong>Three.js</strong>.
      </p>
    </motion.section>
  );
}

export default AboutSection;
