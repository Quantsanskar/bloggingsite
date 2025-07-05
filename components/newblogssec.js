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
        <div ref={containerRef} className={cn("relative py-12 md:py-20", className)}>
            {/* Animated Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent">
                <motion.div
                    style={{ height: lineHeight }}
                    className="w-full bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full"
                />
            </div>

            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-6 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent">
                <motion.div
                    style={{ height: lineHeight }}
                    className="w-full bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full"
                />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-24">
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
            {/* Timeline Dot - Desktop */}
            <motion.div
                className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-black shadow-lg shadow-blue-500/50" />
                    <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-20" />
                </div>
            </motion.div>

            {/* Timeline Dot - Mobile */}
            <motion.div
                className="md:hidden absolute left-6 transform -translate-x-1/2 z-20"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-black shadow-lg shadow-blue-500/50" />
                    <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-20" />
                </div>
            </motion.div>

            {/* Blog Card - Desktop Layout */}
            <div className={`hidden md:flex ${isEven ? "justify-start pr-1/2" : "justify-end pl-1/2"}`}>
                <div className={`w-5/12 ${isEven ? "pr-12" : "pl-12"}`}>
                    <BlogCard blog={blog} isEven={isEven} onHover={setIsHovered} />
                </div>
            </div>

            {/* Blog Card - Mobile Layout */}
            <div className="md:hidden ml-12 mr-4">
                <BlogCard blog={blog} isEven={isEven} onHover={setIsHovered} isMobile={true} />
            </div>

            {/* Connecting Line - Desktop */}
            <motion.div
                className={`hidden md:block absolute top-3 w-12 h-px bg-gradient-to-r ${isEven ? "left-1/2 ml-3 from-blue-500 to-transparent" : "right-1/2 mr-3 from-transparent to-blue-500"
                    }`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            />

            {/* Connecting Line - Mobile */}
            <motion.div
                className="md:hidden absolute top-2 left-6 ml-2 w-6 h-px bg-gradient-to-r from-blue-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            />
        </motion.div>
    )
}

const BlogCard = ({ blog, isEven, onHover, isMobile = false }) => {
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
            whileHover={{ y: -8, scale: isMobile ? 1.01 : 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative group cursor-pointer"
        >
            {/* Enhanced Glow Effect */}
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

            {/* Main Card */}
            <div className="relative bg-gray-900/20 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                {/* Dynamic Background */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
                    }}
                />

                {/* Content */}
                <div className="relative p-4 md:p-6 space-y-3 md:space-y-4">
                    {/* Date Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven && !isMobile ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block"
                    >
                        <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm">
                            {blog.date}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight"
                    >
                        {blog.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-gray-400 leading-relaxed text-sm md:text-base line-clamp-3"
                    >
                        {blog.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap gap-1.5 md:gap-2"
                    >
                        {blog.tags.slice(0, isMobile ? 3 : 4).map((tag, tagIndex) => (
                            <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 + tagIndex * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-800/50 text-gray-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200 backdrop-blur-sm"
                            >
                                {tag}
                            </motion.span>
                        ))}
                        {blog.tags.length > (isMobile ? 3 : 4) && (
                            <span className="text-gray-500 text-xs md:text-sm self-center">
                                +{blog.tags.length - (isMobile ? 3 : 4)} more
                            </span>
                        )}
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-700/50"
                    >
                        <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
                            <motion.span
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-1"
                            >
                                <span className="text-blue-400">👁</span>
                                {blog.views}
                            </motion.span>
                            <motion.span
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-1"
                            >
                                <span className="text-green-400">👍</span>
                                {blog.likes}
                            </motion.span>
                            <motion.span
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-1"
                            >
                                <span className="text-purple-400">💬</span>
                                {blog.comments}
                            </motion.span>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-blue-400 hover:text-blue-300 font-medium text-xs md:text-sm flex items-center gap-1 transition-colors duration-200"
                        >
                            <span className="hidden sm:inline">Read More</span>
                            <span className="sm:hidden">Read</span>
                            <motion.span
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-sm"
                            >
                                →
                            </motion.span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Enhanced Floating Elements */}
                <FloatingElements />
            </div>
        </motion.div>
    )
}

const FloatingElements = () => {
    return (
        <>
            {/* Primary floating element */}
            <motion.div
                className="absolute top-3 md:top-4 right-3 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-400 rounded-full opacity-60"
                animate={{
                    y: [0, -8, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary floating element */}
            <motion.div
                className="absolute bottom-4 md:bottom-6 left-4 md:left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-40"
                animate={{
                    y: [0, -6, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Tertiary floating element */}
            <motion.div
                className="absolute top-1/2 right-2 md:right-3 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-30"
                animate={{
                    y: [0, -4, 0],
                    opacity: [0.3, 0.7, 0.3],
                    x: [0, 2, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
        </>
    )
}
const WaterFillButton = () => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Main Button Container */}
            <div className="relative overflow-hidden rounded-full border-2 border-blue-400/50 backdrop-blur-sm">
                {/* Empty State Background */}
                <div className="absolute inset-0 bg-transparent" />

                {/* Water Fill Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"
                    initial={{ y: "100%" }}
                    animate={{ y: isHovered ? "0%" : "100%" }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        type: "tween"
                    }}
                />

                {/* Water Ripple Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={isHovered ? {
                        x: ["-100%", "100%"],
                        opacity: [0, 1, 0]
                    } : {}}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: isHovered ? Infinity : 0,
                        repeatDelay: 0.5
                    }}
                />

                {/* Bubbles Effect */}
                {isHovered && (
                    <>
                        <motion.div
                            className="absolute w-2 h-2 bg-white/30 rounded-full"
                            style={{ left: "20%", bottom: "20%" }}
                            animate={{
                                y: [0, -30, -60],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                        />
                        <motion.div
                            className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
                            style={{ left: "70%", bottom: "30%" }}
                            animate={{
                                y: [0, -40, -80],
                                opacity: [0, 1, 0],
                                scale: [0.3, 1, 0.3]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 0.5
                            }}
                        />
                        <motion.div
                            className="absolute w-1 h-1 bg-white/50 rounded-full"
                            style={{ left: "45%", bottom: "15%" }}
                            animate={{
                                y: [0, -35, -70],
                                opacity: [0, 1, 0],
                                scale: [0.4, 1, 0.4]
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 1
                            }}
                        />
                    </>
                )}

                {/* Button Content */}
                <div className="relative z-10 px-8 py-4 text-center">
                    <motion.span
                        className={`font-bold text-lg transition-all duration-300 ${isHovered ? 'text-white drop-shadow-sm' : 'text-blue-400'
                            }`}
                        animate={{
                            scale: isHovered ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        Explore All Articles
                    </motion.span>

                    {/* Floating Arrow */}
                    <motion.span
                        className={`ml-2 inline-block transition-all duration-300 ${isHovered ? 'text-white' : 'text-blue-400'
                            }`}
                        animate={{
                            x: isHovered ? [0, 5, 0] : 0,
                            rotate: isHovered ? [0, 10, 0] : 0
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: isHovered ? Infinity : 0,
                            ease: "easeInOut"
                        }}
                    >
                        →
                    </motion.span>
                </div>

                {/* Glow Effect */}
                <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-lg"
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                />
            </div>

           
        </motion.div>
    )
}
// Enhanced Usage Component
export default function FeaturedBlogsSection() {
    const featuredBlogs = [
        {
            id: 1,
            title: "Building Scalable React Applications with Modern Architecture",
            description:
                "Explore advanced patterns and best practices for creating maintainable, performant React applications that can grow with your team and requirements. Learn about component composition, state management, and architectural decisions that matter.",
            date: "Dec 15, 2024",
            tags: ["React", "Architecture", "Performance", "Best Practices", "Scalability"],
            views: "12.5K",
            likes: "342",
            comments: "89",
        },
        {
            id: 2,
            title: "Mastering TypeScript: Advanced Patterns for Enterprise Applications",
            description:
                "Deep dive into TypeScript's most powerful features and learn how to leverage them for building robust, type-safe applications at scale. Discover advanced types, patterns, and techniques used in production environments.",
            date: "Dec 10, 2024",
            tags: ["TypeScript", "Enterprise", "Patterns", "Type Safety", "Advanced"],
            views: "8.7K",
            likes: "256",
            comments: "67",
        },
        {
            id: 3,
            title: "Next.js 15: Revolutionary Features That Will Change Web Development",
            description:
                "Discover the groundbreaking features in Next.js 15 and learn how they're reshaping the landscape of modern web development. From improved performance to developer experience enhancements.",
            date: "Dec 5, 2024",
            tags: ["Next.js", "Web Development", "Innovation", "Framework", "Performance"],
            views: "15.2K",
            likes: "428",
            comments: "112",
        },
        {
            id: 4,
            title: "CSS Grid Mastery: Creating Complex Layouts with Ease",
            description:
                "Master the art of CSS Grid and learn how to create sophisticated, responsive layouts that adapt beautifully to any screen size. Practical examples and real-world applications included.",
            date: "Nov 28, 2024",
            tags: ["CSS", "Grid", "Layout", "Responsive Design", "Frontend"],
            views: "9.3K",
            likes: "198",
            comments: "45",
        },
        {
            id: 5,
            title: "Performance Optimization: Making Your React Apps Lightning Fast",
            description:
                "Comprehensive guide to React performance optimization techniques, from basic concepts to advanced strategies for enterprise applications. Learn about profiling, optimization patterns, and best practices.",
            date: "Nov 20, 2024",
            tags: ["React", "Performance", "Optimization", "Speed", "Best Practices"],
            views: "11.8K",
            likes: "367",
            comments: "78",
        },
    ]

    return (
        <div className="min-h-screen">
            <div className="py-12 md:py-20 px-0 md:px-8">
                <div className="max-w-7xl mx-auto">
<motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
            ✨ Featured Content
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Timeline of Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Journey through our most impactful articles that have shaped the developer community and pushed the
            boundaries of modern web development.
          </p>
        </motion.div>


                    <FeaturedBlogsTimeline blogs={featuredBlogs} />

                    {/* Crazy Water CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mt-4 md:mt-6 cursor-pointer"
                        onClick={() => window.location.href = "/blog"}
                    >
                        <WaterFillButton />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}