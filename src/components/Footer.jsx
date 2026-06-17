import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Tamilarasan M
          </span>
          <p className="text-gray-400 text-sm mt-1">Software Engineer</p>
        </div>

        {/* Social icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Tamilara5an"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tamilarasan-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-red-400 transition-colors duration-300"
          >
            <i className="fab fa-youtube text-xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Tamilarasan M. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
