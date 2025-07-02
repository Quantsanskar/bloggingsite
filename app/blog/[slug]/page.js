import Sidebar from "@/components/Sidebar"

export default function BlogPost({ params }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 ml-64">
        <article className="max-w-4xl mx-auto px-8 py-12">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Architecture</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Performance</span>
            </div>

            <h1 className="text-4xl font-bold mb-6">Building Scalable React Applications with Modern Architecture</h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <div className="font-medium">Alex Johnson</div>
                <div className="text-sm text-gray-400">Senior Frontend Developer</div>
              </div>
              <div className="text-gray-400 text-sm ml-auto">Dec 15, 2024 • 8 min read</div>
            </div>
          </div>

          <div className="prose-custom max-w-none">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Building scalable React applications requires careful consideration of architecture, component design, and
              performance optimization. In this comprehensive guide, we'll explore the essential patterns and practices
              that will help you create maintainable applications that can grow with your team and requirements.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Component Architecture Principles</h2>

            <p className="mb-6 leading-relaxed">
              The foundation of any scalable React application lies in its component architecture. By following
              established patterns and principles, you can create a codebase that's both maintainable and performant.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">1. Single Responsibility Principle</h3>

            <p className="mb-6 leading-relaxed">
              Each component should have a single, well-defined responsibility. This makes components easier to test,
              debug, and reuse across your application.
            </p>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 mb-8">
              <pre className="text-green-400 text-sm overflow-x-auto">
                {`// Good: Single responsibility
function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <UserAvatar src={user.avatar} />
      <UserInfo name={user.name} email={user.email} />
    </div>
  )
}

// Better: Separate concerns
function UserAvatar({ src, alt }) {
  return <img src={src || "/placeholder.svg"} alt={alt} className="avatar" />
}

function UserInfo({ name, email }) {
  return (
    <div className="user-info">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}`}
              </pre>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">2. Composition over Inheritance</h3>

            <p className="mb-6 leading-relaxed">
              React's composition model allows you to build complex UIs from simple, reusable components. This approach
              is more flexible and maintainable than traditional inheritance patterns.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">State Management Strategies</h2>

            <p className="mb-6 leading-relaxed">
              Effective state management is crucial for scalable applications. Choose the right tool for the job,
              whether it's local component state, Context API, or external libraries like Redux or Zustand.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Performance Optimization</h2>

            <p className="mb-6 leading-relaxed">
              Performance should be considered from the beginning of your project. Use React's built-in optimization
              features like React.memo, useMemo, and useCallback strategically to prevent unnecessary re-renders.
            </p>

            <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-bold text-blue-300 mb-3">💡 Pro Tip</h4>
              <p className="text-blue-100">
                Always measure performance before optimizing. Use React DevTools Profiler to identify actual bottlenecks
                rather than optimizing prematurely.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Conclusion</h2>

            <p className="mb-6 leading-relaxed">
              Building scalable React applications is an ongoing process that requires attention to architecture,
              performance, and maintainability. By following these principles and continuously refining your approach,
              you'll create applications that can evolve with your needs.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  👍 Like (42)
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                  💬 Comment
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                  🔗 Share
                </button>
              </div>

              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                📖 Save to Reading List
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
