"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function BlogsHeader({ onSearch, onCategoryChange, onSortChange }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSort, setActiveSort] = useState("latest")

  const categories = [
    { id: "all", label: "All Posts", count: 42 },
    { id: "react", label: "React", count: 15 },
    { id: "nextjs", label: "Next.js", count: 12 },
    { id: "javascript", label: "JavaScript", count: 18 },
    { id: "typescript", label: "TypeScript", count: 8 },
    { id: "css", label: "CSS", count: 10 },
    { id: "performance", label: "Performance", count: 6 },
    { id: "architecture", label: "Architecture", count: 5 },
  ]

  const sortOptions = [
    { id: "latest", label: "Latest" },
    { id: "popular", label: "Most Popular" },
    { id: "trending", label: "Trending" },
    { id: "oldest", label: "Oldest" },
  ]

  const handleSearch = (value) => {
    setSearchTerm(value)
    onSearch?.(value)
  }

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  const handleSortChange = (sortId) => {
    setActiveSort(sortId)
    onSortChange?.(sortId)
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium inline-block">
          📚 Knowledge Hub
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="gradient-text">Developer Insights</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Dive deep into modern web development with comprehensive guides, cutting-edge techniques, and insights that
          will transform your coding journey.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search articles, topics, or technologies..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Sort Options */}
        <div className="flex justify-center">
          <div className="flex bg-gray-900/50 rounded-xl p-1 border border-gray-700/50">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSortChange(option.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSort === option.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
