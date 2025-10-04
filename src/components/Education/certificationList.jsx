// src/components/CertificationList.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import CERTIFICATIONS from "../../constants/certifications";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function CertificationList() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Certifications
        </span>
      </h2>

      <motion.div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.15)", transition: { duration: 0.3 } }}
            className="bg-white dark:bg-gray-800 rounded-xl border-l-4 border-indigo-500 shadow-md p-6 flex flex-col justify-between transition cursor-pointer"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
              {cert.title}
            </h3>

            {/* Provider & Year */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {cert.provider} • {cert.year}
            </p>

            {/* Details */}
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-5">
              {cert.details}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-md bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-gray-200 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline font-medium text-sm mt-auto"
            >
              View Certificate <FaExternalLinkAlt size={12} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default CertificationList;
