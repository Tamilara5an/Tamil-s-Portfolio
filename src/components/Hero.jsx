import React, { useState, useEffect } from 'react'
import HeroAnimation from './HeroAnimation';

const Hero = ({ scrollToSection }) => {
  const roles = ["Java Developer", "Full Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 2000;
    let timer;

    if (isDeleting) {
      // Deleting
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(current => current.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex(current => (current + 1) % roles.length);
      }
    } else {
      // Typing
      if (text.length < currentRole.length) {
        timer = setTimeout(() => {
          setText(current => currentRole.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <HeroAnimation />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent">
                Tamilarasan M
            </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300" style={{ height: '30px' }}>
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {text}
            </span>
            <span className="blinking-cursor text-blue-400">|</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 mb-8">
            I build scalable backend systems and automate cloud infrastructure to deliver robust and efficient solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
                onClick={() =>
                window.open(
                    "https://drive.google.com/file/d/1iN1wiaRuug_UVhx5IYClt1wAHmwr7K5W/view?usp=sharing",
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
        {/* The animation is now in the background, so we don't need this div anymore */}
        {/* <div className="hidden md:flex md:w-1/2 justify-center">
            <HeroAnimation />
        </div> */}
      </div>
    </section>
  )
}

export default Hero
