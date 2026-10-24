import React, { useState, useEffect } from 'react'
import logoImg from '../assets/tamil.jpg'
import { NAV_ITEMS } from '../data/constants'

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNav = (item) => {
    scrollToSection(item)
    setIsMenuOpen(false)
  }

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="fixed w-full bg-gray-900/85 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Link */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNav('home')
            }}
            className="flex items-center gap-2 cursor-pointer transition-opacity duration-200 hover:opacity-85"
          >
            {/* <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" /> */}
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNav(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item
                      ? 'text-purple-400 bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/60'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-xl border-b border-gray-800 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 pt-2 pb-4 space-y-1 sm:px-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className={`block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-200 ${
                  activeSection === item
                    ? 'text-purple-400 bg-purple-900/30 border-l-4 border-purple-500 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
