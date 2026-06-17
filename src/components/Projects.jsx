import React from 'react'
import { projects } from '../data/constants'

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">Featured Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 project-card transition-all duration-300 hover:border-purple-500/30"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                <i className="fas fa-code-branch text-6xl text-purple-400/30"></i>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 md:text-justify leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 text-blue-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300"
              >
                <i className="fab fa-github mr-2"></i>
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
