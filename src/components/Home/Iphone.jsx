import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

function IPhone3D() {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const rotationRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const shadowRef = useRef(null);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      if (!hovered) rotationRef.current.y += 0.3;
      const rotateX = rotationRef.current.x + cursorRef.current.y;
      const rotateY = rotationRef.current.y + cursorRef.current.x;

      controls.start({
        rotateX,
        rotateY,
        transition: { duration: 0.1, ease: "linear" },
      });

      if (shadowRef.current) {
        const offsetX = rotateY / 5;
        const offsetY = rotateX / 5;
        const scale = 1 + Math.abs(rotateX) / 80;
        shadowRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [hovered, controls]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
    const y = ((0.5 - (e.clientY - rect.top) / rect.height) * 40);
    cursorRef.current = { x, y };
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    cursorRef.current = { x: 0, y: 0 };
    rotationRef.current = { x: 0, y: 0 };
    controls.start({ rotateX: 0, rotateY: 0, transition: { type: "spring", stiffness: 80, damping: 20 } });
    if (shadowRef.current) shadowRef.current.style.transform = "translate(-50%, -50%) scale(1)";
  };

  return (
    <div className="relative w-[90vw] max-w-[350px] aspect-[1/2] mx-auto sm:max-w-[320px]">
      {/* Shadow */}
      <div
        ref={shadowRef}
        className="absolute inset-0 bg-black opacity-20 rounded-[3rem] filter blur-3xl pointer-events-none"
        style={{ transform: "translate(-50%, -50%) scale(1)", top: "50%", left: "50%" }}
      />

      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] cursor-pointer"
        style={{ perspective: 1500 }}
        animate={controls}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ rotateY: 0, rotateX: 0 }}
      >
        {/* FRAME */}
        <div className="absolute inset-0 rounded-[3rem] border-[6px] border-gray-800 dark:border-gray-300 shadow-2xl bg-black" />

        {/* FRONT FACE */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 rounded-[2.7rem] bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-inner [backface-visibility:hidden]">
          <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-[2.7rem]" />

          {/* Technology Icons */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              {/* Flutter */}
              <div className="flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 relative">
                <SiFlutter className="text-white w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
                <span className="absolute -bottom-3 px-2 py-0.5 text-xs sm:text-sm font-semibold text-white bg-black/30 rounded-full backdrop-blur-sm">
                  Flutter
                </span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 relative">
                <FaReact className="text-white w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
                <span className="absolute -bottom-3 px-2 py-0.5 text-xs sm:text-sm font-semibold text-white bg-black/30 rounded-full backdrop-blur-sm">
                  React
                </span>
              </div>
            </div>

            <p className="mt-2 text-xs sm:text-sm md:text-base text-white drop-shadow-lg font-medium text-center">
              Building modern, scalable, and responsive apps
            </p>
          </div>

          {/* Notch */}
          <div className="absolute top-2 w-28 sm:w-32 h-6 sm:h-7 bg-gray-900 dark:bg-gray-200 rounded-b-2xl flex items-center justify-center space-x-2 px-2 shadow-md">
            <div className="w-2.5 h-2.5 bg-gray-700 dark:bg-gray-400 rounded-full" />
            <div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[2.7rem] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-inner [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute top-10 left-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gray-900 dark:bg-gray-700 flex flex-wrap gap-2 p-2 shadow-xl">
            <div className="w-10 h-10 bg-black rounded-full border-2 border-gray-600 shadow-inner" />
            <div className="w-10 h-10 bg-black rounded-full border-2 border-gray-600 shadow-inner" />
            <div className="w-10 h-10 bg-black rounded-full border-2 border-gray-600 shadow-inner" />
            <div className="w-6 h-6 bg-yellow-300 rounded-full border shadow-md" />
          </div>
          <div className="absolute bottom-12">
            <p className="text-gray-700 dark:text-gray-400 font-semibold tracking-widest text-sm opacity-75">iPhone</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default IPhone3D;
