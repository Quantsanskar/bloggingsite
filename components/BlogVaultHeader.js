import React from 'react';
import { motion } from 'framer-motion';

export default function BlogVaultHeader() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Film Grain/Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Left Studio Spotlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full"
      >
        {/* Main spotlight using PNG mask */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-90"
          style={{
            background: `linear-gradient(135deg, 
              rgba(65, 105, 225, 0.8) 0%, 
              rgba(65, 105, 225, 0.5) 30%, 
              rgba(65, 105, 225, 0.2) 60%, 
              transparent 100%)`,
            WebkitMask: "url('/images/Polygon 7.png') no-repeat center/cover",
            mask: "url('/images/Polygon 7.png') no-repeat center/cover",
            filter: "blur(2px)",
          }}
        />
        
        {/* Intense center beam with PNG mask */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-70"
          style={{
            background: `linear-gradient(135deg, 
              rgba(100, 149, 237, 0.9) 0%, 
              rgba(100, 149, 237, 0.6) 40%, 
              rgba(100, 149, 237, 0.3) 70%, 
              transparent 100%)`,
            WebkitMask: "url('/images/Polygon 7.png') no-repeat center/cover",
            mask: "url('/images/Polygon 7.png') no-repeat center/cover",
            filter: "blur(1px)",
          }}
        />
        
        {/* Soft glow */}
        <div
          className="absolute top-0 left-0 w-[600px] h-full opacity-40"
          style={{
            background: `radial-gradient(ellipse at 20% 50%, 
              rgba(65, 105, 225, 0.6) 0%, 
              rgba(65, 105, 225, 0.3) 50%, 
              transparent 80%)`,
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* Right Studio Spotlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute top-0 right-0 w-full h-full"
      >
        {/* Main spotlight using PNG mask */}
        <div
          className="absolute top-0 right-0 w-full h-full opacity-90"
          style={{
            background: `linear-gradient(225deg, 
              rgba(65, 105, 225, 0.8) 0%, 
              rgba(65, 105, 225, 0.5) 30%, 
              rgba(65, 105, 225, 0.2) 60%, 
              transparent 100%)`,
            WebkitMask: "url('/images/Polygon 8.png') no-repeat center/cover",
            mask: "url('/images/Polygon 8.png') no-repeat center/cover",
            filter: "blur(2px)",
          }}
        />
        
        {/* Intense center beam with PNG mask */}
        <div
          className="absolute top-0 right-0 w-full h-full opacity-70"
          style={{
            background: `linear-gradient(225deg, 
              rgba(100, 149, 237, 0.9) 0%, 
              rgba(100, 149, 237, 0.6) 40%, 
              rgba(100, 149, 237, 0.3) 70%, 
              transparent 100%)`,
            WebkitMask: "url('/images/Polygon 8.png') no-repeat center/cover",
            mask: "url('/images/Polygon 8.png') no-repeat center/cover",
            filter: "blur(1px)",
          }}
        />
        
        {/* Soft glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-full opacity-40"
          style={{
            background: `radial-gradient(ellipse at 80% 50%, 
              rgba(65, 105, 225, 0.6) 0%, 
              rgba(65, 105, 225, 0.3) 50%, 
              transparent 80%)`,
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* Center Light Enhancement */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(65, 105, 225, 0.3) 0%, 
            rgba(65, 105, 225, 0.1) 40%, 
            transparent 70%)`,
          filter: "blur(100px)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="text-white font-normal mb-6 tracking-tight leading-none"
          style={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            textShadow: "0 8px 40px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(65, 105, 225, 0.4)",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          }}
        >
          The Blog Vault
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="font-light tracking-wide mb-16"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            color: "#94A3B8",
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
            letterSpacing: "0.1em",
            fontWeight: "300",
          }}
        >
          See What I've Been Writing
        </motion.p>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollDown}
      >
        <div className="relative group">
          {/* Animated glow effect */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-blue-400/20 blur-lg"
          />
          
          {/* Main circle */}
          <div
            className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/40"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              border: "1px solid rgba(65, 105, 225, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Animated chevron */}
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="transition-colors duration-300 group-hover:stroke-blue-300"
            >
              <path
                d="M8 3L8 13M8 13L4 9M8 13L12 9"
                stroke="#94A3B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </div>
      </motion.div>

      {/* Cinematic Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, 
            transparent 0%, 
            transparent 40%, 
            rgba(0, 0, 0, 0.3) 70%,
            rgba(0, 0, 0, 0.8) 100%)`,
        }}
      />

      {/* Bottom fade for seamless transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: `linear-gradient(to top, 
            rgba(0, 0, 0, 0.9) 0%, 
            rgba(0, 0, 0, 0.4) 50%,
            transparent 100%)`,
        }}
      />

      {/* Top subtle fade */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(0, 0, 0, 0.6) 0%, 
            transparent 100%)`,
        }}
      />
    </div>
  );
}