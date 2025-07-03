"use client"

import { motion } from "framer-motion"

// Add a Stars component
const Stars = () => (
  <>
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-blue-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 40}%`, // Keep stars in upper portion
        }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      />
    ))}
  </>
)

const Boat = () => (
  <motion.div
    className="absolute z-20"
    style={{
      left: "-50px",
      top: "60%",
      transformOrigin: "bottom center",
    }}
    animate={{
      x: ["-10vw", "110vw"],
      rotate: [-3, 3, -3],
      y: [-5, 5, -5],
    }}
    transition={{
      x: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
      rotate: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
      y: {
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    }}
  >
    <div className="w-8 sm:w-12 md:w-16 h-3 sm:h-4 md:h-6 bg-gray-700 rounded-b-xl relative">
      <div className="absolute inset-0 bg-blue-500/20 rounded-b-xl" />

      {/* Human figure */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        {/* Head */}
        <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_5px_rgba(59,130,246,0.5)] mx-auto border-[1.5px] border-blue-400" />
        {/* Body */}
        <div className="w-1 h-6 bg-white mx-auto shadow-[0_0_5px_rgba(59,130,246,0.5)] border-[1.5px] border-blue-400" />
        {/* Arms */}
        <div className="flex -mt-4 justify-center">
          <div className="w-4 h-1 bg-white rotate-[-30deg] origin-right shadow-[0_0_5px_rgba(59,130,246,0.5)] border-[1.5px] border-blue-400" />
          <div className="w-4 h-1 bg-white rotate-[30deg] origin-left shadow-[0_0_5px_rgba(59,130,246,0.5)] border-[1.5px] border-blue-400" />
        </div>
        {/* Legs */}
        <div className="flex -mt-1 justify-center gap-0.5">
          <div className="w-1 h-3 bg-white rotate-[-15deg] origin-top shadow-[0_0_5px_rgba(59,130,246,0.5)] border-[1.5px] border-blue-400" />
          <div className="w-1 h-3 bg-white rotate-[15deg] origin-top shadow-[0_0_5px_rgba(59,130,246,0.5)] border-[1.5px] border-blue-400" />
        </div>
      </div>
    </div>
  </motion.div>
)

const AnimatedCoolText = () => {
  return (
    <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-64 w-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden relative">
      {/* Grid background pattern to match your site */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stars */}
        <Stars />

        {/* Text content */}
        <motion.div
          className="relative z-10 text-center mb-8 sm:mb-12"
          animate={{
            y: [0, -8, 0],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4">
            <span className="gradient-text">My Featured Blogs</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-medium">SO, here it goes...</p>
        </motion.div>

        {/* Boat with adjusted sizes */}
        <Boat />

        {/* Wave layers with your site's blue theme */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 w-full h-16 sm:h-20 md:h-24"
            style={{
              background: `linear-gradient(180deg, 
                rgba(59, 130, 246, ${0.1 - i * 0.02}) 0%,
                rgba(37, 99, 235, ${0.3 - i * 0.05}) 50%,
                rgba(29, 78, 216, ${0.4 - i * 0.08}) 100%)`,
            }}
            animate={{
              x: [-200 - i * 100, 200 + i * 100],
              y: [i * 4, -i * 4],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedCoolText
