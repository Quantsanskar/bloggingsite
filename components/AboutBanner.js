"use client"

import { CardContainer, CardBody, CardItem } from "./ThreeDCard"

export default function AboutBanner() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About This Blog</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A modern platform dedicated to sharing cutting-edge web development knowledge and empowering developers
            worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that great developers are made through continuous learning and sharing knowledge. Our mission
                is to provide in-depth, practical content that helps developers at all levels master modern web
                technologies and build amazing applications.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">What Makes Us Different</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Practical Focus</h4>
                    <p className="text-gray-400">
                      Every article includes real-world examples and hands-on projects you can implement immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Cutting-Edge Content</h4>
                    <p className="text-gray-400">
                      Stay ahead of the curve with the latest frameworks, tools, and best practices in web development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Community Driven</h4>
                    <p className="text-gray-400">
                      Join a community of passionate developers sharing knowledge and growing together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Card */}
          <div className="flex justify-center">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Join Our Developer Community
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Connect with like-minded developers, share your projects, and grow your skills together.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="h-60 w-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover/card:shadow-xl">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-4">👨‍💻</div>
                      <div className="text-2xl font-bold mb-2">25,000+</div>
                      <div className="text-sm opacity-90">Active Developers</div>
                    </div>
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Learn more →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
                  >
                    Join Community
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
