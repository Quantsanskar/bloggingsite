"use client"

import { motion } from "framer-motion"

export default function BlogStats() {
  const stats = [
    { label: "Total Articles", value: "50+", icon: "📝" },
    { label: "Monthly Readers", value: "25K+", icon: "👥" },
    { label: "Tech Topics", value: "15+", icon: "🚀" },
    { label: "Code Examples", value: "200+", icon: "💻" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="text-center p-6 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}
