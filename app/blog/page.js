"use client"

import { useState, useMemo } from "react"
// import Sidebar from "@/components/blog/Sidebar"
import BlogsHeader from "@/components/blog/BlogsHeader"
import BlogStats from "@/components/blog/BlogStats"
import { HoverEffect } from "@/components/blog/HoverEffect"
import { motion } from "framer-motion"
import BlogVaultHeader from "@/components/BlogVaultHeader"
import Navigation from "@/components/Navigation"
import MyBlogsHeader from "@/components/blog/MyBlogHeader"
export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSort, setActiveSort] = useState("latest")

  // Blog data
  const allBlogs = [
    {
      title: "Building Scalable React Applications with Modern Architecture",
      description:
        "Explore advanced patterns and best practices for creating maintainable, performant React applications that can grow with your team and requirements. Learn about component composition, state management, and optimization techniques.",
      author: "Alex Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Performance", "Best Practices"],
      link: "/blog/scalable-react-applications",
      image: "/placeholder.svg?height=200&width=400&text=React+Architecture",
      category: "react",
      popularity: 95,
      publishDate: "2024-12-15",
    },
    {
      title: "Mastering CSS Grid: Advanced Layout Techniques",
      description:
        "Deep dive into CSS Grid's most powerful features and learn how to create complex, responsive layouts with ease. From basic concepts to advanced grid patterns.",
      author: "Sarah Chen",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      tags: ["CSS", "Layout", "Grid", "Responsive"],
      link: "/blog/css-grid-mastery",
      image: "/placeholder.svg?height=200&width=400&text=CSS+Grid",
      category: "css",
      popularity: 88,
      publishDate: "2024-12-12",
    },
    {
      title: "Next.js 15: What's New and How to Upgrade",
      description:
        "Explore the latest features in Next.js 15 and get a step-by-step guide for upgrading your existing applications. Performance improvements and new capabilities.",
      author: "Mike Rodriguez",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      tags: ["Next.js", "React", "Upgrade", "Performance"],
      link: "/blog/nextjs-15-features",
      image: "/placeholder.svg?height=200&width=400&text=Next.js+15",
      category: "nextjs",
      popularity: 92,
      publishDate: "2024-12-10",
    },
    {
      title: "TypeScript Best Practices for Large Applications",
      description:
        "Learn essential TypeScript patterns and practices that will help you maintain code quality in enterprise applications. Advanced types and configuration.",
      author: "Emma Wilson",
      date: "Dec 8, 2024",
      readTime: "12 min read",
      tags: ["TypeScript", "Best Practices", "Enterprise", "Types"],
      link: "/blog/typescript-best-practices",
      image: "/placeholder.svg?height=200&width=400&text=TypeScript",
      category: "typescript",
      popularity: 85,
      publishDate: "2024-12-08",
    },
    {
      title: "Building Real-time Applications with WebSockets",
      description:
        "Create interactive, real-time web applications using WebSockets, Socket.io, and modern JavaScript frameworks. Complete implementation guide.",
      author: "David Kim",
      date: "Dec 5, 2024",
      readTime: "15 min read",
      tags: ["WebSockets", "Real-time", "JavaScript", "Socket.io"],
      link: "/blog/websockets-realtime-apps",
      image: "/placeholder.svg?height=200&width=400&text=WebSockets",
      category: "javascript",
      popularity: 78,
      publishDate: "2024-12-05",
    },
    {
      title: "Optimizing React Performance: A Complete Guide",
      description:
        "Comprehensive guide to React performance optimization techniques, from basic concepts to advanced strategies for enterprise applications.",
      author: "Lisa Zhang",
      date: "Dec 3, 2024",
      readTime: "14 min read",
      tags: ["React", "Performance", "Optimization", "Hooks"],
      link: "/blog/react-performance-optimization",
      image: "/placeholder.svg?height=200&width=400&text=React+Performance",
      category: "performance",
      popularity: 90,
      publishDate: "2024-12-03",
    },
    {
      title: "Modern Authentication Patterns in Web Apps",
      description:
        "Explore secure authentication methods including JWT, OAuth, and passwordless authentication for modern web applications.",
      author: "James Thompson",
      date: "Nov 30, 2024",
      readTime: "11 min read",
      tags: ["Authentication", "Security", "JWT", "OAuth"],
      link: "/blog/modern-authentication",
      image: "/placeholder.svg?height=200&width=400&text=Authentication",
      category: "javascript",
      popularity: 82,
      publishDate: "2024-11-30",
    },
    {
      title: "Advanced CSS Animations and Transitions",
      description:
        "Master the art of CSS animations with advanced techniques, performance considerations, and creative examples that will elevate your designs.",
      author: "Maria Garcia",
      date: "Nov 28, 2024",
      readTime: "9 min read",
      tags: ["CSS", "Animations", "Transitions", "Design"],
      link: "/blog/advanced-css-animations",
      image: "/placeholder.svg?height=200&width=400&text=CSS+Animations",
      category: "css",
      popularity: 75,
      publishDate: "2024-11-28",
    },
    {
      title: "Microservices Architecture with Node.js",
      description:
        "Learn how to design and implement scalable microservices architecture using Node.js, Docker, and modern deployment strategies.",
      author: "Robert Chen",
      date: "Nov 25, 2024",
      readTime: "16 min read",
      tags: ["Node.js", "Microservices", "Architecture", "Docker"],
      link: "/blog/nodejs-microservices",
      image: "/placeholder.svg?height=200&width=400&text=Microservices",
      category: "architecture",
      popularity: 87,
      publishDate: "2024-11-25",
    },
  ]

  // Filter and sort blogs
  const filteredBlogs = useMemo(() => {
    let filtered = allBlogs

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((blog) => blog.category === activeCategory)
    }

    // Sort blogs
    switch (activeSort) {
      case "popular":
        filtered.sort((a, b) => b.popularity - a.popularity)
        break
      case "trending":
        filtered.sort((a, b) => b.popularity - a.popularity) // Could be different logic
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate))
        break
      case "latest":
      default:
        filtered.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        break
    }

    return filtered
  }, [searchTerm, activeCategory, activeSort])

  return (
    <>
    <Navigation/>
    <div className="min-h-screen flex">
      
      <main>
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Header Section */}
          {/* <BlogsHeader onSearch={setSearchTerm} onCategoryChange={setActiveCategory} onSortChange={setActiveSort} /> */}
            {/* <MyBlogsHeader/> */}
            {/* <BlogsHeader/> */}
            <BlogVaultHeader/>
          {/* Stats Section */}
          {/* <BlogStats /> */}

          {/* Results Info */}
          

          {/* Blogs Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {filteredBlogs.length > 0 ? (
              <HoverEffect items={filteredBlogs} className="gap-6" />
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or browse different categories.</p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory("all")
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Show All Articles
                </button>
              </div>
            )}
          </motion.div>

          {/* Load More Button */}
          {filteredBlogs.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-12"
            >
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Load More Articles
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
    </>
  )
}
