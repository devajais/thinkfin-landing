"use client";

import { motion } from "framer-motion";

export function LaserBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal laser beams */}
      <motion.div
        className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"
        style={{ top: "20%" }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-30"
        style={{ top: "60%" }}
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Diagonal laser beams */}
      <motion.div
        className="absolute w-[2px] h-[150%] bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-20"
        style={{ left: "20%", top: "-25%", transform: "rotate(15deg)" }}
        animate={{
          y: ["-100%", "100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-[2px] h-[150%] bg-gradient-to-b from-transparent via-fuchsia-400 to-transparent opacity-20"
        style={{ right: "30%", top: "-25%", transform: "rotate(-15deg)" }}
        animate={{
          y: ["100%", "-100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glowing dots that follow laser paths */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-purple-500 blur-sm"
        style={{ top: "20%", left: "0%" }}
        animate={{
          x: ["0%", "100vw"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-4 h-4 rounded-full bg-fuchsia-500 blur-sm"
        style={{ top: "60%", right: "0%" }}
        animate={{
          x: ["0%", "-100vw"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Vertical scanning lines */}
      <motion.div
        className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-purple-300 to-transparent opacity-20"
        style={{ left: "30%" }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-fuchsia-300 to-transparent opacity-20"
        style={{ right: "40%" }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #a855f7 1px, transparent 1px),
            linear-gradient(0deg, #a855f7 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
