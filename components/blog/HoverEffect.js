"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 block rounded-3xl border border-blue-500/20"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.image} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardMeta author={item.author} date={item.date} readTime={item.readTime} tags={item.tags} />
          </Card>
        </a>
      ))}
    </div>
  )
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 relative z-20 transition-all duration-300",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export const CardImage = ({ src, alt, className }) => {
  return (
    <div className={cn("relative w-full h-48 mb-4 rounded-xl overflow-hidden", className)}>
      <img
        src={src || "/placeholder.svg?height=200&width=400&text=Blog+Post"}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  )
}

export const CardTitle = ({ className, children }) => {
  return <h4 className={cn("text-white font-bold tracking-wide text-xl mb-3 line-clamp-2", className)}>{children}</h4>
}

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("text-gray-400 tracking-wide leading-relaxed text-sm mb-4 line-clamp-3", className)}>{children}</p>
  )
}

export const CardMeta = ({ author, date, readTime, tags }) => {
  return (
    <div className="space-y-3">
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags?.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full text-xs border border-blue-500/30"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Author and Meta */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {author?.charAt(0)}
          </div>
          <span>{author}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  )
}
