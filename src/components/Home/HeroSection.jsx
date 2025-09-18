import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-[90vh] text-center bg-gradient-to-b from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800 px-6">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.9 }}
        className="text-5xl md:text-6xl font-extrabold text-indigo-700 dark:text-orange-400"
      >
        Welcome to My <br />
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-orange-400 dark:to-pink-500 bg-clip-text text-transparent">
          3D Animated Portfolio
        </span>
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
      >
        Building interactive web experiences with{" "}
        <span className="font-semibold">React, Tailwind, Framer Motion, and Three.js</span>.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 dark:border-orange-400 dark:text-orange-400 font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

export default HeroSection;
