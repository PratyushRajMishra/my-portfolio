import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/hero-bg.png"; // 👈 Import your local image

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
      className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-top bg-cover grayscale"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center space-y-6 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
    
        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 drop-shadow-lg"
          variants={textVariants}
        >
          Hi, I’m Pratyush Mishra
        </motion.h1>

        {/* Role */}
        <motion.h2
          className="text-sm sm:text-base text-gray-300 tracking-widest"
          variants={textVariants}
        >
          Flutter Developer | Mobile App Enthusiast
        </motion.h2>

        {/* Professional Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
          variants={textVariants}
        >
          I build <span className="font-semibold text-indigo-400">modern, scalable, and user-friendly</span>{" "}
          mobile applications. With expertise in <span className="font-semibold text-purple-400">Flutter</span>, 
          I craft apps that balance <span className="italic">beautiful design</span> and{" "}
          <span className="italic">robust performance</span>.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          className="flex space-x-4 mt-6"
          variants={textVariants}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-400 text-indigo-300 font-medium rounded-xl hover:bg-indigo-500/20 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
