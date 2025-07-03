"use client"

import { motion } from "framer-motion"

// Floating Particles component with different colors
const FloatingParticles = () => (
  <>
    {[...Array(60)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 50}%`,
          background: `${
            i % 3 === 0
              ? "rgba(168, 85, 247, 0.8)" // Purple
              : i % 3 === 1
                ? "rgba(236, 72, 153, 0.8)" // Pink
                : "rgba(34, 211, 238, 0.8)" // Cyan
          }`,
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.4, 0.8],
          y: [0, -30, 0],
        }}
        transition={{
          duration: Math.random() * 4 + 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
    ))}
  </>
)

// Rocket Ship instead of boat
const RocketShip = () => (
  <motion.div
    className="absolute z-20"
    style={{
      right: "-80px",
      top: "70%",
      transformOrigin: "center",
    }}
    animate={{
      x: ["120vw", "-20vw"],
      rotate: [5, -5, 5],
      y: [-10, 10, -10],
    }}
    transition={{
      x: {
        duration: 25,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
      rotate: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
      y: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    }}
  >
    <div className="relative">
      {/* Rocket Body */}
      <div className="w-6 sm:w-8 md:w-12 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-purple-400 to-pink-500 rounded-t-full relative">
        {/* Rocket Window */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-300 rounded-full border-2 border-white" />

        {/* Rocket Fins */}
        <div className="absolute -bottom-2 -left-1 w-3 h-4 bg-purple-600 transform rotate-12 rounded-bl-lg" />
        <div className="absolute -bottom-2 -right-1 w-3 h-4 bg-purple-600 transform -rotate-12 rounded-br-lg" />
      </div>

      {/* Rocket Flames */}
      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2"
        animate={{
          scaleY: [0.8, 1.2, 0.8],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-4 h-6 bg-gradient-to-b from-orange-400 via-red-500 to-yellow-300 rounded-b-full" />
      </motion.div>

      {/* Sparkle Trail */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{
            left: `${Math.random() * 20 - 10}px`,
            top: `${20 + i * 5}px`,
          }}
          animate={{
            opacity: [1, 0],
            scale: [1, 0],
            x: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  </motion.div>
)

const MyBlogsHeader = () => {
  return (
    <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-80 w-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-pink-900 overflow-hidden relative">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "25px 25px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "25px 25px"],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Particles */}
        <FloatingParticles />

        {/* Main Text Content */}
        <motion.div
          className="relative z-10 text-center mb-8 sm:mb-12"
          animate={{
            y: [0, -12, 0],
            rotate: [-0.5, 0.5, -0.5],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              My Blogs
            </span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Exploring the digital universe...
          </motion.p>
        </motion.div>

        {/* Rocket Ship */}
        <RocketShip />

        {/* Cosmic Wave Layers */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 w-full h-12 sm:h-16 md:h-20"
            style={{
              background: `linear-gradient(135deg, 
                rgba(168, 85, 247, ${0.15 - i * 0.03}) 0%,
                rgba(236, 72, 153, ${0.25 - i * 0.04}) 50%,
                rgba(34, 211, 238, ${0.35 - i * 0.06}) 100%)`,
              transform: `translateY(${i * 15}px)`,
            }}
            animate={{
              x: [300 + i * 150, -300 - i * 150],
              y: [i * 6, -i * 6],
              rotate: [i * 2, -i * 2],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-sm"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0
                  ? "rgba(168, 85, 247, 0.4)"
                  : i % 3 === 1
                    ? "rgba(236, 72, 153, 0.4)"
                    : "rgba(34, 211, 238, 0.4)"
              }, transparent)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default MyBlogsHeader
