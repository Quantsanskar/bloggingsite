export default function Timeline() {
  const timelineData = [
    {
      year: "2022",
      title: "First Steps",
      description: "Started my blogging journey with simple tutorials and personal coding experiences.",
      side: "right",
      details: "I began by sharing basic JavaScript concepts and my learning process as a self-taught developer.",
    },
    {
      year: "2023",
      title: "Finding My Voice",
      description: "Discovered my passion for explaining complex concepts in simple terms.",
      side: "left",
      details: "Focused on React tutorials and modern web development practices that helped other developers.",
    },
    {
      year: "2023",
      title: "Community Building",
      description: "Started engaging more with the developer community and building meaningful connections.",
      side: "right",
      details: "Began responding to comments, joining developer discussions, and collaborating with other writers.",
    },
    {
      year: "2024",
      title: "Deep Dive Content",
      description: "Shifted focus to comprehensive, in-depth articles about advanced topics.",
      side: "left",
      details: "Started writing detailed guides on architecture, performance optimization, and best practices.",
    },
    {
      year: "2024",
      title: "Thought Leadership",
      description: "Began sharing insights on industry trends and future of web development.",
      side: "right",
      details: "Writing about emerging technologies, developer experience, and the evolution of our craft.",
    },
    {
      year: "2025",
      title: "Mentorship Focus",
      description: "Dedicated to helping junior developers navigate their career paths.",
      side: "left",
      details: "Creating content that bridges the gap between learning to code and becoming a professional developer.",
    },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500"></div>

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black z-10"></div>

            {/* Year label */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8">
              <span className="bg-black px-3 py-1 text-blue-400 font-bold text-lg">{item.year}</span>
            </div>

            {/* Content */}
            <div className={`flex ${item.side === "left" ? "justify-start pr-1/2" : "justify-end pl-1/2"}`}>
              <div className={`w-5/12 ${item.side === "left" ? "pr-8" : "pl-8"}`}>
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 card-hover">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom continuation indicator */}
      <div className="flex justify-center mt-12">
        <div className="bg-gray-800 rounded-full px-6 py-3 border border-gray-700">
          <span className="text-gray-400 text-sm">Journey continues...</span>
        </div>
      </div>
    </div>
  )
}
