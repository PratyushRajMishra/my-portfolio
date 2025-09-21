import React from "react";
import { motion } from "framer-motion";
import IPhone3D from "./Iphone";
import { Award, Users, Smartphone, Layers } from "lucide-react";

function AboutSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const highlights = [
    { label: "Industry Experience", color: "from-indigo-400 to-indigo-600", icon: <Award className="w-5 h-5 text-white" /> },
    { label: "Happy Clients", color: "from-pink-400 to-pink-600", icon: <Users className="w-5 h-5 text-white" /> },
    { label: "Responsive Design", color: "from-purple-400 to-purple-600", icon: <Smartphone className="w-5 h-5 text-white" /> },
    { label: "Published Apps", color: "from-blue-400 to-blue-600", icon: <Layers className="w-5 h-5 text-white" /> },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16"
    >
      {/* LEFT: Text */}
      <motion.div className="flex-1 min-w-[250px] text-center md:text-left space-y-8" variants={textVariants}>
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            About Me
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-widest">
            Developer • Designer • Problem Solver
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
          <p>
            I’m a <span className="font-semibold text-indigo-500">Flutter Developer</span> passionate about building apps that combine clean design with reliable performance. My goal is to create <span className="italic">scalable</span>, <span className="italic">user-focused</span> solutions.
          </p>
          <p>
            Beyond mobile, I work with <strong>React</strong>, <strong>Node.js</strong>, and <strong>Express.js</strong> to design full-stack digital products. This allows me to deliver seamless experiences across both <span className="font-semibold">web</span> and <span className="font-semibold">mobile</span>.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -3 }}
              className={`flex flex-col items-center p-4 sm:p-6 rounded-2xl shadow-lg text-white bg-gradient-to-br ${item.color} backdrop-blur-sm min-w-[80px]`}
            >
              <div className="mb-1">{item.icon}</div>
              <span className="text-xs sm:text-sm font-medium mt-1 text-center">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT: 3D iPhone */}
      <div className="flex-1 w-3/4 sm:w-1/2 md:w-full max-w-[320px] flex justify-center md:justify-end">
        <IPhone3D />
      </div>
    </motion.section>
  );
}

export default AboutSection;
