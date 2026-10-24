import React from 'react'
import profileImg from '../assets/tamil.jpg'

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">About Me</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
        {/* Profile image */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full">
              <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden ring-4 ring-purple-500/20 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-gray-800 rounded-full p-2.5 sm:p-3 border-2 border-gray-700 shadow-lg">
              <i className="fas fa-code text-lg sm:text-xl text-purple-400"></i>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="md:w-2/3">
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 text-left md:text-justify leading-relaxed">
            I am a Full Stack Developer with 1.5+ years of professional experience in designing, developing, and maintaining scalable web applications across diverse technology stacks and client environments. Currently working at{" "}
            <span className="text-blue-400 font-medium">August Innovate</span>, I specialize in backend development using Java and Spring Boot and building dynamic, responsive user interfaces with React.
          </p>

          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 text-left md:text-justify leading-relaxed">
            I have hands-on experience working with multiple clients, contributing to the implementation, customization, enhancement, and maintenance of Freshworks solutions, particularly Freshdesk and Freshservice. My expertise extends beyond application development to include a strong understanding of Freshworks product capabilities, business workflows, integrations, and implementation practices that help align technical solutions with client requirements.
          </p>

          <p className="text-base sm:text-lg text-gray-300 text-left md:text-justify leading-relaxed">
            I am passionate about building reliable, maintainable, and high-performance applications while continuously expanding my knowledge of system design, software architecture, API development, integration patterns, and modern engineering practices. I strive to deliver practical, scalable solutions that improve operational efficiency, enhance user experience, and create meaningful business value.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <div className="flex items-center gap-2 bg-gray-800/60 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-gray-300 border border-gray-700/50">
              <i className="fas fa-map-marker-alt text-purple-400"></i>
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/60 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-gray-300 border border-gray-700/50">
              <i className="fas fa-graduation-cap text-blue-400"></i>
              <span>Computer Science Graduate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
