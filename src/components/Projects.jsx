import React from 'react'
import { projects } from '../data/constants'

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">Featured Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 project-card transition-all duration-300 hover:border-purple-500/30 flex flex-col justify-between"
          >
            <div>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 sm:h-48 w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="h-44 sm:h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                  <i className="fas fa-code-branch text-5xl sm:text-6xl text-purple-400/30"></i>
                </div>
              )}

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 text-left md:text-justify leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] sm:text-xs bg-gray-800 text-blue-300 px-2.5 py-1 rounded-full border border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors py-1"
              >
                <i className="fab fa-github mr-2 text-base"></i>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
