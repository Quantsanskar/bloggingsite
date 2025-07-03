import React, { createContext, useState, useContext, useRef, useEffect } from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

const MouseEnterContext = createContext(undefined)

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
  }

  const handleMouseEnter = (e) => {
    setIsMouseEntered(true)
    if (!containerRef.current) return
  }

  const handleMouseLeave = (e) => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-20 flex items-center justify-center", containerClassName)}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn("flex items-center justify-center relative transition-all duration-200 ease-linear", className)}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export const CardBody = ({ children, className }) => {
  return (
    <div className={cn("h-auto w-auto [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>
      {children}
    </div>
  )
}

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    handleAnimations()
  }, [isMouseEntered])

  const handleAnimations = () => {
    if (!ref.current) return
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
  }

  return (
    <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>
      {children}
    </Tag>
  )
}

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider")
  }
  return context
}

// Enhanced Demo Component
const EnhancedCardDemo = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <div className="flex justify-center relative z-10">
        <CardContainer className="inter-var lg:ml-[6rem] 2xl:ml-[0rem]" containerClassName="py-10">
          <CardBody className="w-[45rem] sm:w-[35rem] h-[55rem]">
            <CardItem translateZ="100" className="lg:w-[30rem] 2xl:w-[35rem]">
              <div className="relative group">
                {/* Subtle monochrome glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-black/10 via-gray-800/10 to-black/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Main card with minimal glass effect */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  {/* Profile image container */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                      height="500"
                      width="400"
                      className="h-[500px] w-full object-cover transition-all duration-500 group-hover:scale-105"
                      alt="Alex Johnson - Senior Full Stack Developer"
                    />
                    
                    {/* Elegant monochrome overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Refined shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                {/* Sophisticated floating elements - monochrome */}
                <CardItem translateZ="150" translateX="-20" translateY="-20" className="absolute -top-6 -left-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full opacity-60 animate-pulse shadow-lg"></div>
                    <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full opacity-20 animate-ping"></div>
                  </div>
                </CardItem>

                <CardItem translateZ="120" translateX="20" translateY="20" className="absolute -bottom-6 -right-6">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full opacity-50 animate-pulse delay-300 shadow-lg"></div>
                    <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full opacity-15 animate-ping delay-300"></div>
                  </div>
                </CardItem>

                {/* Minimalist geometric elements */}
                <CardItem translateZ="80" translateX="30" translateY="-30" className="absolute -top-2 -right-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full opacity-40 animate-bounce delay-500 shadow-md"></div>
                </CardItem>

                <CardItem translateZ="90" translateX="-15" translateY="15" className="absolute -bottom-2 -left-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full opacity-30 animate-bounce delay-700 shadow-md"></div>
                </CardItem>

                {/* Refined geometric patterns */}
                <CardItem translateZ="60" translateX="10" translateY="10" className="absolute top-1/4 -right-8">
                  <div className="w-8 h-8 border-2 border-gray-400/20 rotate-45 animate-spin-slow shadow-sm"></div>
                </CardItem>

                <CardItem translateZ="70" translateX="-10" translateY="-10" className="absolute bottom-1/4 -left-8">
                  <div className="w-6 h-6 border-2 border-gray-500/20 rounded-full animate-pulse delay-200 shadow-sm"></div>
                </CardItem>

                {/* Artistic accent lines */}
                <CardItem translateZ="50" translateX="5" translateY="5" className="absolute top-1/2 -left-10">
                  <div className="w-1 h-16 bg-gradient-to-b from-transparent via-gray-400/30 to-transparent animate-pulse delay-100"></div>
                </CardItem>

                <CardItem translateZ="55" translateX="-5" translateY="-5" className="absolute top-1/3 -right-10">
                  <div className="w-1 h-20 bg-gradient-to-t from-transparent via-gray-500/25 to-transparent animate-pulse delay-400"></div>
                </CardItem>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  )
}

export default EnhancedCardDemo