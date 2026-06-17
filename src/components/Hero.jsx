import React, { useState, useEffect } from 'react'

const Hero = ({ scrollToSection }) => {
  const fullName = "Tamilarasan M"
  const [displayName, setDisplayName] = useState("")
  const [charIndex, setCharIndex]     = useState(0)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < fullName.length) {
        setDisplayName((prev) => prev + fullName[charIndex])
        setCharIndex((prev) => prev + 1)
      } else {
        setTimeout(() => {
          setDisplayName("")
          setCharIndex(0)
        }, 1200)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [charIndex])

  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center"
    >
      <div className="text-center md:text-left w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            {displayName}
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
          Java Developer &amp; <span className="text-blue-400">Full Stack Developer</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 mb-8">
          I build scalable backend systems and automate cloud infrastructure to deliver robust and efficient solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() =>
              window.open(
                "https://1drv.ms/w/c/40657c4d3c3417ae/EbA3nK_XhH1PqYu_HkbBdcgB049FTyfLJjEYRadz3bPHSg?e=mfcINW",
                "_blank"
              )
            }
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md font-medium text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-900/20"
          >
            Download Resume
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 border border-purple-500 text-purple-400 rounded-md font-medium hover:bg-purple-900/30 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
