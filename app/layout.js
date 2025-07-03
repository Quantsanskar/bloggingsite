import "./globals.css"
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata = {
  title: "DevBlog - Modern Developer Insights",
  description: "A modern blog focused on web development, technology trends, and coding insights",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-black text-white font-sans antialiased">{children}</body>
    </html>
  )
}
