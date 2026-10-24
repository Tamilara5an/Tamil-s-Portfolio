import React from 'react'
import hackerImg from '../assets/hacker.jpg'

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">Get In Touch</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <div className="glass-card p-5 sm:p-8 rounded-xl space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800/90 border border-gray-700 rounded-lg px-4 py-2.5 text-base text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800/90 border border-gray-700 rounded-lg px-4 py-2.5 text-base text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-gray-800/90 border border-gray-700 rounded-lg px-4 py-2.5 text-base text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-900/20 active:scale-95 text-center"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2">
          <div className="glass-card p-5 sm:p-8 rounded-xl h-full flex flex-col justify-between gap-6 sm:gap-8">
            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-5 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="bg-purple-900/30 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                    <i className="fas fa-envelope text-purple-400 text-lg sm:text-xl"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">Email Me At</p>
                    <a
                      href="mailto:tamilaraanm@gmail.com"
                      className="text-sm sm:text-base text-blue-300 hover:underline truncate block"
                    >
                      tamilaraanm@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="bg-blue-900/30 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                    <i className="fab fa-linkedin-in text-blue-400 text-lg sm:text-xl"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">Professional Profile</p>
                    <a
                      href="https://www.linkedin.com/in/tamilarasan-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-blue-300 hover:underline truncate block"
                    >
                      linkedin.com/in/tamilarasan-dev
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="bg-gray-800/40 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                    <i className="fab fa-github text-gray-300 text-lg sm:text-xl"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">Code Repositories</p>
                    <a
                      href="https://github.com/Tamilara5an"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-blue-300 hover:underline truncate block"
                    >
                      github.com/Tamilara5an
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-200">
                  Let's connect on social media
                </h4>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://www.linkedin.com/in/tamilarasan-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-blue-900/30 text-blue-400 transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in text-lg sm:text-xl"></i>
                  </a>
                  <a
                    href="https://github.com/Tamilara5an"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gray-700/40 text-gray-300 transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github text-lg sm:text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden xl:flex justify-end mr-6 mb-2">
              <div className="w-28 h-28 rounded-full border border-white/20 shadow-xl overflow-hidden opacity-60">
                <img src={hackerImg} alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
