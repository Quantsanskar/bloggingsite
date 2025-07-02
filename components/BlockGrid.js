export default function BlogGrid() {
  const posts = [
    {
      id: 1,
      title: "Mastering CSS Grid: Advanced Layout Techniques",
      excerpt:
        "Deep dive into CSS Grid's most powerful features and learn how to create complex, responsive layouts with ease.",
      author: "Sarah Chen",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      tags: ["CSS", "Layout", "Grid"],
      featured: false,
    },
    {
      id: 2,
      title: "Next.js 15: What's New and How to Upgrade",
      excerpt:
        "Explore the latest features in Next.js 15 and get a step-by-step guide for upgrading your existing applications.",
      author: "Mike Rodriguez",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      tags: ["Next.js", "React", "Upgrade"],
      featured: false,
    },
    {
      id: 3,
      title: "TypeScript Best Practices for Large Applications",
      excerpt:
        "Learn essential TypeScript patterns and practices that will help you maintain code quality in enterprise applications.",
      author: "Emma Wilson",
      date: "Dec 8, 2024",
      readTime: "12 min read",
      tags: ["TypeScript", "Best Practices", "Enterprise"],
      featured: false,
    },
    {
      id: 4,
      title: "Building Real-time Applications with WebSockets",
      excerpt:
        "Create interactive, real-time web applications using WebSockets, Socket.io, and modern JavaScript frameworks.",
      author: "David Kim",
      date: "Dec 5, 2024",
      readTime: "15 min read",
      tags: ["WebSockets", "Real-time", "JavaScript"],
      featured: false,
    },
    {
      id: 5,
      title: "Optimizing React Performance: A Complete Guide",
      excerpt:
        "Comprehensive guide to React performance optimization techniques, from basic concepts to advanced strategies.",
      author: "Lisa Zhang",
      date: "Dec 3, 2024",
      readTime: "14 min read",
      tags: ["React", "Performance", "Optimization"],
      featured: false,
    },
    {
      id: 6,
      title: "Modern Authentication Patterns in Web Apps",
      excerpt:
        "Explore secure authentication methods including JWT, OAuth, and passwordless authentication for modern web applications.",
      author: "James Thompson",
      date: "Nov 30, 2024",
      readTime: "11 min read",
      tags: ["Authentication", "Security", "JWT"],
      featured: false,
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden card-hover">
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>

            <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {post.author.charAt(0)}
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors">
              Read More
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}
