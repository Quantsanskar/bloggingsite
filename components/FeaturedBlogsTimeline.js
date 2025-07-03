"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const FeaturedBlogsTimeline = ({ blogs, className }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className={cn("relative py-20", className)}>
      {/* Animated Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full"
        />
      </div>

      {/* Timeline Items */}
      <div className="space-y-24">
        {blogs.map((blog, index) => (
          <TimelineItem key={blog.id} blog={blog} index={index} />
        ))}
      </div>
    </div>
  )
}

const TimelineItem = ({ blog, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const itemRef = useRef(null)
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 z-20"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-black shadow-lg shadow-blue-500/50" />
          <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-20" />
        </div>
      </motion.div>

      {/* Blog Card */}
      <div className={`flex ${isEven ? "justify-start pr-1/2" : "justify-end pl-1/2"}`}>
        <div className={`w-5/12 ${isEven ? "pr-12" : "pl-12"}`}>
          <BlogCard blog={blog} isEven={isEven} onHover={setIsHovered} />
        </div>
      </div>

      {/* Connecting Line */}
      <motion.div
        className={`absolute top-3 w-12 h-px bg-gradient-to-r ${
          isEven ? "left-1/2 ml-3 from-blue-500 to-transparent" : "right-1/2 mr-3 from-transparent to-blue-500"
        }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </motion.div>
  )
}

const BlogCard = ({ blog, isEven, onHover }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative group cursor-pointer"
    >
      {/* Glow Effect */}
      {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

      {/* Main Card */}
      <div className="relative bg-gray-900/20 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden">
        {/* Dynamic Background */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />

        {/* Content */}
        <div className="relative p-6 space-y-4">
          {/* Date Badge */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {blog.date}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300"
          >
            {blog.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 leading-relaxed"
          >
            {blog.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {blog.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + tagIndex * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-between pt-4 border-t border-gray-700/50"
          >
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <span className="text-blue-400">👁</span>
                {blog.views}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">👍</span>
                {blog.likes}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-purple-400">💬</span>
                {blog.comments}
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors duration-200"
            >
              Read More
              <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <FloatingElements />
      </div>
    </motion.div>
  )
}

const FloatingElements = () => {
  return (
    <>
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-40"
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </>
  )
}

// Usage Component
export default function FeaturedBlogsSection() {
  const featuredBlogs = [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Architecture",
      description:
        "Explore advanced patterns and best practices for creating maintainable, performant React applications that can grow with your team and requirements.",
      date: "Dec 15, 2024",
      tags: ["React", "Architecture", "Performance", "Best Practices"],
      views: "12.5K",
      likes: "342",
      comments: "89",
    },
    {
      id: 2,
      title: "Mastering TypeScript: Advanced Patterns for Enterprise Applications",
      description:
        "Deep dive into TypeScript's most powerful features and learn how to leverage them for building robust, type-safe applications at scale.",
      date: "Dec 10, 2024",
      tags: ["TypeScript", "Enterprise", "Patterns", "Type Safety"],
      views: "8.7K",
      likes: "256",
      comments: "67",
    },
    {
      id: 3,
      title: "Next.js 15: Revolutionary Features That Will Change Web Development",
      description:
        "Discover the groundbreaking features in Next.js 15 and learn how they're reshaping the landscape of modern web development.",
      date: "Dec 5, 2024",
      tags: ["Next.js", "Web Development", "Innovation", "Framework"],
      views: "15.2K",
      likes: "428",
      comments: "112",
    },
    {
      id: 4,
      title: "CSS Grid Mastery: Creating Complex Layouts with Ease",
      description:
        "Master the art of CSS Grid and learn how to create sophisticated, responsive layouts that adapt beautifully to any screen size.",
      date: "Nov 28, 2024",
      tags: ["CSS", "Grid", "Layout", "Responsive Design"],
      views: "9.3K",
      likes: "198",
      comments: "45",
    },
    {
      id: 5,
      title: "Performance Optimization: Making Your React Apps Lightning Fast",
      description:
        "Comprehensive guide to React performance optimization techniques, from basic concepts to advanced strategies for enterprise applications.",
      date: "Nov 20, 2024",
      tags: ["React", "Performance", "Optimization", "Speed"],
      views: "11.8K",
      likes: "367",
      comments: "78",
    },
  ]

  return (
    <div className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
            ✨ Featured Content
          </span>
          
           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Journey through our most impactful articles that have shaped the developer community and pushed the
            boundaries of modern web development.
          </p> 
        </motion.div> */}

        <FeaturedBlogsTimeline blogs={featuredBlogs} />
      </div>
    </div>
  )
}
