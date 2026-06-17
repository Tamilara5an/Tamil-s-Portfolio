import React, { useState, useEffect } from 'react'
import profileImg from '../assets/tamil.jpg'
import { ABOUT_COMPANIES } from '../data/constants'

const About = () => {
  const [companyIndex, setCompanyIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCompanyIndex((prev) => (prev + 1) % ABOUT_COMPANIES.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">About Me</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Profile image */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-full">
              <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-gray-800 rounded-full p-3 border-2 border-gray-700">
              <i className="fas fa-code text-xl text-purple-400"></i>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="md:w-2/3">
          <p className="text-lg text-gray-300 mb-6 md:text-justify leading-relaxed">
            I'm a passionate Full Stack Developer currently working at{" "}
            <span className="text-blue-400 transition-opacity duration-500">
              {ABOUT_COMPANIES[companyIndex]}
            </span>
            , where I specialize in building scalable applications using Java Spring Boot for the backend and React for dynamic, user-friendly frontends.
          </p>

          <p className="text-lg text-gray-300 mb-6 md:text-justify leading-relaxed">
            My role involves contributing to key projects for Freshworks, particularly enhancing and maintaining solutions for Freshdesk and Freshservice, ensuring seamless integration and performance.
          </p>

          <p className="text-lg text-gray-300 md:text-justify leading-relaxed">
            Beyond coding, I actively explore modern software practices, focusing on optimizing workflows, learning advanced system design concepts, and staying updated with the latest trends in full stack development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
              <i className="fas fa-map-marker-alt text-purple-400"></i>
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
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
