import Sidebar from "@/components/Sidebar"
import Timeline from "@/components/Timeline"

export default function Journey() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">My Blogging Journey</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              My approach to writing and sharing knowledge has evolved through years of experience. Here's how I've
              grown as a content creator and the key milestones in my blogging journey.
            </p>
          </div>

          <Timeline />
        </div>
      </main>
    </div>
  )
}
