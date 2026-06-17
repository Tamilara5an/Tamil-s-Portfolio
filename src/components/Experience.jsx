import React, { useState, useEffect } from 'react'
import { experiences, EXP_COMPANIES } from '../data/constants'

const Experience = () => {
  const [expCompanyIndex, setExpCompanyIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setExpCompanyIndex((prev) => (prev + 1) % EXP_COMPANIES.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900/50">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">Professional Experience</span>
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 h-full border-l-2 border-gray-700 border-dashed"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 relative pl-12 md:pl-0 ${
              index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
            }`}
          >
            <div className={`glass-card p-6 rounded-xl ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
              <h3 className="text-xl font-bold text-purple-400">{exp.role}</h3>

              <p className="text-blue-300 font-medium mb-2">
                {index === 0 ? (
                  <span className="transition-opacity duration-500">
                    {EXP_COMPANIES[expCompanyIndex]}
                  </span>
                ) : (
                  exp.company
                )}{" "}
                • {exp.period}
              </p>

              <p className="text-gray-300 mb-4 text-justify leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 text-blue-300 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
