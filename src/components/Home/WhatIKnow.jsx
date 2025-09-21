import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Wrench } from "lucide-react"; // icons
import { PositionMesh } from "@react-three/drei";

function WhatIKnow() {
  const categories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6 text-indigo-500" />,
      skills: ["Flutter", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-purple-500" />,
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-pink-500" />,
      skills: ["MongoDB", "Firebase", "MySQL", "PostgreSQL"],
    },
    {
      title: "Others",
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
      skills: ["Git & GitHub", "Docker (Basics)", "Postman", "Agile", "AWS (Basics)"],
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
          What I Know
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400">
          Technologies & tools I use to build apps and digital experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -4 }}
            className="bg-white/5 dark:bg-black/30 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
              {cat.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 
                             text-indigo-400 dark:text-indigo-300 font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhatIKnow;
