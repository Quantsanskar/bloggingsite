export default function FeaturedPost() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 card-hover">
      <div className="absolute top-6 left-8">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Building Scalable React Applications with Modern Architecture</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Explore advanced patterns and best practices for creating maintainable, performant React applications that
            can grow with your team and requirements. Learn about component composition, state management, and
            optimization techniques.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Architecture</span>
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Performance</span>
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Best Practices</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <div className="font-medium">Alex Johnson</div>
              <div className="text-sm text-gray-400">Senior Frontend Developer</div>
            </div>
            <div className="text-gray-400 text-sm ml-auto">Dec 15, 2024 • 8 min read</div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Read Article →
          </button>
        </div>

        <div className="relative">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
              <div className="text-6xl">⚛️</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
