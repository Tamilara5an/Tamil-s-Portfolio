import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="border-b-2 border-purple-500 pb-1">Get In Touch</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="button"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md font-medium text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/2">
          <div className="glass-card p-8 rounded-xl h-full">
            <h3 className="text-xl font-bold text-purple-400 mb-6">Contact Information</h3>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-purple-900/30 p-3 rounded-full">
                  <i className="fas fa-envelope text-purple-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:tamilarasancse09@gmail.com"
                    className="text-blue-300 hover:underline"
                  >
                    tamilarasancse09@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-900/30 p-3 rounded-full">
                  <i className="fab fa-linkedin-in text-blue-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/tamilarasan-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline"
                  >
                    https://www.linkedin.com/in/tamilarasan-dev/
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="bg-gray-800/30 p-3 rounded-full">
                  <i className="fab fa-github text-gray-300 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/Tamilara5an"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline"
                  >
                    https://github.com/Tamilara5an
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Let's connect on social media</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-purple-900/30 transition-all duration-300"
                >
                  <i className="fab fa-twitter text-blue-400"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/tamilarasan-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-900/30 transition-all duration-300"
                >
                  <i className="fab fa-linkedin-in text-blue-400"></i>
                </a>
                <a
                  href="https://github.com/Tamilara5an"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700/30 transition-all duration-300"
                >
                  <i className="fab fa-github text-gray-300"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-red-900/30 transition-all duration-300"
                >
                  <i className="fab fa-youtube text-red-400"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
