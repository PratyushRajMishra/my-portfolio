import React from "react";
import { motion } from "framer-motion";
import EDUCATION from "../../constants/education";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

function EducationList() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b 
      from-gray-50 via-white to-gray-100 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      py-24 px-4 sm:px-6 lg:px-12 flex flex-col justify-center"
    >
      {/* Background abstract shapes */}
<div className="absolute top-0 left-1/2 transform -translate-x-1/2
  w-32 sm:w-64 md:w-96 lg:w-[900px]    /* width: 8rem on mobile → 900px on lg */
  h-32 sm:h-64 md:h-96 lg:h-[900px]    /* height: 8rem on mobile → 900px on lg */
  bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
  opacity-10 rounded-full blur-3xl pointer-events-none">
</div>
      <div className="absolute bottom-0 right-1/4 
        w-[500px] sm:w-[600px] lg:w-[700px] h-[500px] sm:h-[600px] lg:h-[700px] 
        bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 
        opacity-10 rounded-full blur-3xl pointer-events-none">
      </div>

      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 sm:mb-24">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          bg-clip-text text-transparent">
          My Education
        </span>
      </h2>

      {/* Timeline */}
      <motion.div
        className="relative max-w-6xl mx-auto flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {EDUCATION.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const isLast = idx === EDUCATION.length - 1;

          return (
            <div key={idx} className="relative flex flex-col items-center w-full">
              {/* Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className={`relative w-full sm:w-[90%] md:w-[80%] lg:w-[70%] 
                  bg-white dark:bg-gray-800 p-6 sm:p-10 md:p-12 
                  rounded-3xl shadow-xl hover:shadow-2xl 
                  transition-all duration-50 transform hover:-translate-y-1
                  ${
                    isLeft
                      ? "md:self-start md:mr-16 lg:mr-20 text-left"
                      : "md:self-end md:ml-16 lg:ml-20 text-left"
                  }`}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {item.school}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
                  {item.degree} <span className="font-medium">({item.year})</span>
                </p>

                {item.details && (
                  <p className="mt-4 sm:mt-5 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-md md:text-lg">
                    {item.details}
                  </p>
                )}

                {item.skills && (
                  <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-xs sm:text-sm md:text-md font-semibold rounded-full 
                          bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 
                          dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 
                          text-indigo-700 dark:text-indigo-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Connector (no animation) */}
              {!isLast && (
                <div className="w-1 h-20 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default EducationList;
