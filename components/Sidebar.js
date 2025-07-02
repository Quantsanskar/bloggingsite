"use client"

import { useState } from "react"

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("home")

  const menuItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "articles", label: "Articles", icon: "📝" },
    { id: "journey", label: "Journey", icon: "🛤️" },
    { id: "about", label: "About", icon: "👤" },
    { id: "categories", label: "Categories", icon: "📂" },
    { id: "newsletter", label: "Newsletter", icon: "📧" },
    { id: "contact", label: "Contact", icon: "💬" },
  ]

  const socialLinks = [
    { icon: "🐙", label: "GitHub" },
    { icon: "🐦", label: "Twitter" },
    { icon: "💼", label: "LinkedIn" },
    { icon: "📧", label: "Email" },
  ]

  const handleNavigation = (itemId) => {
    setActiveItem(itemId)
    if (itemId === "journey") {
      window.location.href = "/journey"
    } else if (itemId === "about") {
      window.location.href = "/about"
    } else if (itemId === "home") {
      window.location.href = "/"
    }
    // Add other navigation logic as needed
  }

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-black border-r border-gray-800 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold gradient-text">DevBlog</h1>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeItem === item.id ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="flex justify-center gap-4 mb-4">
          {socialLinks.map((social, index) => (
            <button
              key={index}
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              title={social.label}
            >
              <span className="text-lg">{social.icon}</span>
            </button>
          ))}
        </div>

        <button className="w-full p-2 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
          <span className="text-lg">🌙</span>
        </button>

        <div className="text-center text-xs text-gray-500 mt-4">
          © 2025
          <br />
          DevBlog
        </div>
      </div>
    </div>
  )
}
