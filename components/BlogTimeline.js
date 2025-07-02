export default function BlogTimeline() {
  const blogMilestones = [
    {
      year: "2024",
      month: "December",
      title: "React Architecture Series",
      description: "Launched comprehensive series on building scalable React applications.",
      posts: 5,
      views: "12.5K",
      side: "right",
    },
    {
      year: "2024",
      month: "November",
      title: "Performance Deep Dives",
      description: "Started writing detailed performance optimization guides.",
      posts: 3,
      views: "8.2K",
      side: "left",
    },
    {
      year: "2024",
      month: "October",
      title: "TypeScript Mastery",
      description: "Published advanced TypeScript patterns and best practices.",
      posts: 4,
      views: "15.1K",
      side: "right",
    },
    {
      year: "2024",
      month: "September",
      title: "CSS Modern Techniques",
      description: "Explored cutting-edge CSS features and layout methods.",
      posts: 6,
      views: "9.8K",
      side: "left",
    },
  ]

  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-8 text-center">
        <span className="gradient-text">Recent Content Milestones</span>
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500/50"></div>

        <div className="space-y-8">
          {blogMilestones.map((milestone, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-black z-10"></div>

              {/* Content */}
              <div className={`flex ${milestone.side === "left" ? "justify-start pr-1/2" : "justify-end pl-1/2"}`}>
                <div className={`w-5/12 ${milestone.side === "left" ? "pr-6" : "pl-6"}`}>
                  <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blue-400 font-semibold text-sm">
                        {milestone.month} {milestone.year}
                      </span>
                    </div>
                    <h4 className="font-bold mb-2">{milestone.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{milestone.description}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{milestone.posts} posts</span>
                      <span>{milestone.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
