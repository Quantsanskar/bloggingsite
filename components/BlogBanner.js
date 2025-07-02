"use client"

import { CardContainer, CardBody, CardItem } from "./ThreeDCard"

export default function BlogBanner() {
  return (
    <div className="bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Blog Description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  🚀 Modern Web Development
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Elevate Your</span>
                <br />
                <span className="gradient-text">Coding Journey</span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Discover cutting-edge web development techniques, master modern frameworks, and build applications that
                stand the test of time. From React architecture to performance optimization, we cover everything you
                need to become a world-class developer.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">What You'll Learn</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">React & Next.js Mastery</h4>
                    <p className="text-gray-400 text-sm">Build scalable applications with modern React patterns</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Performance Optimization</h4>
                    <p className="text-gray-400 text-sm">Make your apps lightning fast and user-friendly</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">TypeScript Best Practices</h4>
                    <p className="text-gray-400 text-sm">Write type-safe code that scales with your team</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Modern CSS Techniques</h4>
                    <p className="text-gray-400 text-sm">Create stunning UIs with advanced CSS features</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                Start Learning Today
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800/50">
                Browse All Articles
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400 text-sm">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">25K+</div>
                <div className="text-gray-400 text-sm">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-gray-400 text-sm">Topics</div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Floating Card */}
          <div className="flex justify-center lg:justify-end">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Make your code float in production
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of modern web development techniques and best practices.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="/images/image3.png"
                    height="400"
                    width="600"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Modern Web Development"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Subscribe
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
