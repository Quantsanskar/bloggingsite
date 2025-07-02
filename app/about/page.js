import Sidebar from "@/components/Sidebar"
import AuthorExperience from "@/components/AuthorExperience"

export default function About() {
  return (
    <>
      <main>
        <AuthorExperience />

        {/* Additional About Content */}
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">My Development Philosophy</h3>
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-semibold text-white mb-3">🎯 Problem-First Approach</h4>
                  <p className="text-gray-400">
                    I believe in understanding the problem deeply before jumping into solutions. Every line of code
                    should serve a purpose.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-semibold text-white mb-3">🚀 Continuous Learning</h4>
                  <p className="text-gray-400">
                    Technology evolves rapidly. I stay current with the latest trends while focusing on fundamentals
                    that stand the test of time.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-semibold text-white mb-3">👥 Knowledge Sharing</h4>
                  <p className="text-gray-400">
                    The best way to solidify knowledge is to teach others. That's why I write, mentor, and contribute to
                    the developer community.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Beyond Coding</h3>
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-semibold text-white mb-3">📚 Technical Writing</h4>
                  <p className="text-gray-400">
                    I've published 50+ articles on modern web development, reaching over 25,000 developers monthly.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-semibold text-white mb-3">🎤 Speaking & Workshops</h4>
                  <p className="text-gray-400">
                    Regular speaker at tech meetups and conferences, conducting workshops on React, Next.js, and modern
                    web development.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-semibold text-white mb-3">🌱 Mentoring</h4>
                  <p className="text-gray-400">
                    Passionate about helping junior developers grow their careers through one-on-one mentoring and code
                    reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
