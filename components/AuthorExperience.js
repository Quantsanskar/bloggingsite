"use client"

// import { CardContainer, CardBody, CardItem } from "@/components/ThreeDCard"
import { CardContainer, CardBody, CardItem } from "@/components/new3dcard"

export default function AuthorExperience() {
    const experiences = [
        {
            company: "TechCorp Solutions",
            role: "Senior Full Stack Developer",
            period: "2022 - Present",
            description:
                "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting microservices.",
            technologies: ["React", "Next.js", "TypeScript", "AWS"],
        },
        {
            company: "StartupXYZ",
            role: "Frontend Developer",
            period: "2020 - 2022",
            description:
                "Built responsive web applications from scratch, implemented modern UI/UX designs, and optimized performance for high-traffic applications.",
            technologies: ["React", "JavaScript", "CSS3", "Redux"],
        },
        {
            company: "Digital Agency Pro",
            role: "Junior Developer",
            period: "2019 - 2020",
            description:
                "Developed client websites, learned modern web technologies, and collaborated with design teams to create pixel-perfect implementations.",
            technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"],
        },
    ]

    return (
        <div className="py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
                        👨‍💻 Meet the Author
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Professional Journey</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        From junior developer to tech lead, here's my journey through the ever-evolving world of web development.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Right Side - 3D Floating Card with Only Author Image */}
                    <div className="flex justify-center">
                        <CardContainer className="inter-var lg:ml-[6rem] 2xl:ml-[0rem]" containerClassName="py-10">
                            <CardBody className="w-[45rem] sm:w-[35rem] h-[55rem]">
                                <CardItem translateZ="100" className="lg:w-[30rem] 2xl:w-[35rem]">
                                    <div className="relative group">
                                        <img
                                            src="/images/image.png"
                                            height="500"
                                            width="400"
                                            className="h-[500px] w-full object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                                            alt="Alex Johnson - Senior Full Stack Developer"
                                        />
                                        {/* Subtle gradient overlay for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>

                                        {/* Optional: Floating elements for extra visual interest */}
                                        <CardItem translateZ="150" translateX="-20" translateY="-20" className="absolute -top-4 -left-4">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
                                        </CardItem>

                                        <CardItem translateZ="120" translateX="20" translateY="20" className="absolute -bottom-4 -right-4">
                                            <div className="w-6 h-6 bg-cyan-500 rounded-full opacity-60"></div>
                                        </CardItem>
                                    </div>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    {/* Left Side - Professional Experience */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-center text-white">Chandan Kumar</h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Senior Full Stack Developer with 5+ years of experience building scalable web applications. Passionate
                                about sharing knowledge, mentoring developers, and exploring cutting-edge technologies that shape the
                                future of web development.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold text-center text-white">Professional Experience</h4>
                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative pl-8 border-l-2 border-blue-500/30">
                                        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                                        <div className="space-y-3">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                <h5 className="text-xl font-semibold text-white">{exp.role}</h5>
                                                <span className="text-blue-400 text-sm font-medium">{exp.period}</span>
                                            </div>
                                            <p className="text-blue-300 font-medium">{exp.company}</p>
                                            <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold text-center text-white">Core Expertise</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-sm">⚛️</span>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-white mb-1">Frontend Development</h5>
                                        <p className="text-gray-400 text-sm">React, Next.js, TypeScript, Modern CSS</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-sm">🔧</span>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-white mb-1">Backend Development</h5>
                                        <p className="text-gray-400 text-sm">Node.js, Express, APIs, Databases</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-sm">☁️</span>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-white mb-1">Cloud & DevOps</h5>
                                        <p className="text-gray-400 text-sm">AWS, Docker, CI/CD, Deployment</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-sm">👥</span>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-white mb-1">Leadership</h5>
                                        <p className="text-gray-400 text-sm">Team Lead, Mentoring, Architecture</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                                View My Work
                            </button>
                            <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800/50">
                                Connect on LinkedIn
                            </button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
