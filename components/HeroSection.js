"use client"

import { motion } from "framer-motion"
import { ThreeDMarquee } from "./ThreeDMarquee"

export default function HeroSection() {
  // Blog post preview images - you can replace these with actual blog post screenshots
  const blogImages = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",


  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* 3D Marquee Background */}
      <div className="absolute inset-0 opacity-60">
        <ThreeDMarquee images={blogImages} className="h-full w-full" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            {/* <span className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Welcome to DevBlog
            </span> */}
            {/* <span className="inline-block text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">

            </span> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <div className="-mb-16"><span className="text-white text-center">Hi, <span className="text-blue-600">this is</span></span></div>


            <span className="gradient-text"></span>
            <br />
            <span className="relative">
              <span className="bg-gray-800 text-gray-100 px-4 py-2 rounded-lg">Chandan</span>
            </span>{" "}
            <span className="text-white">Kumar</span>
            <br />
            {/* <span className="text-white text-center">Developer(by profession)</span>{""} */}

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            I’m a passionate Full Stack Developer & Creative Designer with 7 years’ experience helping startups grow through smart websites, marketing, ads, and design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 -mt-4">
              Know More About Me →
            </button>
            {/* <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800/50">
              Browse Topics
            </button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">7+</div>
              <div className="text-gray-400 text-sm">Year of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">96+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl font-bold text-blue-400 mb-2">72+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-blue-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div> */}
    </div>
  )
}
