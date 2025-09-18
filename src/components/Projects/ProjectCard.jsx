import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 6px 24px rgba(0,0,0,0.14)" }}
      className="rounded bg-gray-100 dark:bg-gray-800 p-4 transition-all border"
    >
      <h3 className="font-bold text-lg">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
      <a target="_blank" rel="noopener noreferrer" href={project.link} className="text-indigo-700 dark:text-orange-400 underline">
        View Code
      </a>
    </motion.div>
  );
}
export default ProjectCard;
