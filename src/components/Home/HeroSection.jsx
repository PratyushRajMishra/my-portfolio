import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  return (
    <section
      className="relative w-full h-screen bg-gray-800 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover grayscale"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611702817692-ee0591608901?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          variants={textVariants}
        >
          Hello, I'm{" "}
          <span className="text-indigo-500">Pratyush Mishra</span>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base text-gray-300 tracking-widest"
          variants={textVariants}
        >
          @FLUTTER DEVELOPER
        </motion.p>
      </motion.div>
    </section>
  );
}

export default HeroSection;
