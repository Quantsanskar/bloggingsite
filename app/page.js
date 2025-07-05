"use client"
// import Sidebar from "./components/Sidebar"
import HeroSection from "@/components/HeroSection"
import BlogBanner from "@/components/BlogBanner"
import BlogGrid from "@/components/BlockGrid"
import FeaturedPost from "@/components/FeaturedPost"
import BlogTimeline from "@/components/BlogTimeline"
import AuthorExperience from "@/components/AuthorExperience"
// import FeaturedBlogsSection from "@/components/FeaturedBlogsTimeline"
import AnimatedCoolText from "@/components/AnimatedCoolText"
import FeaturedBlogsSection from "@/components/newblogssec"
import DynamicMarque from "@/components/DynamicMarque"
import Navigation from "@/components/Navigation"
export default function Home() {
  return (
    <>
    <Navigation />
      <main>
        {/* Hero Section with 3D Marquee */}
        <HeroSection />
        {/* <div className="mt-6"><DynamicMarque/></div> */}
      

        {/* Blog Banner with 3D Card */}
        {/* <BlogBanner /> */}
        <AuthorExperience />

        {/* <AnimatedCoolText /> */}

        <div className="max-w-6xl mx-auto px-8 py-12">


          {/* <FeaturedPost /> */}

          {/* <div className="mt-20">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-bold">Latest Posts</h3>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  All
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                  React
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                  Next.js
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                  JavaScript
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                  CSS
                </button>
              </div>
            </div>
            <BlogGrid />
          </div>

          <div className="mt-20">
            <BlogTimeline />
          </div> */}
<div className="-mt-28">
            <FeaturedBlogsSection />
</div>
          
        </div>
      </main>
    </>
  )
}
