import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [activeSection, setActiveSection] = useState('story')

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash

      if (hash === '#about') {
        setActiveSection('about')
      } else if (hash === '#features') {
        setActiveSection('features')
      } else {
        setActiveSection('story')
      }
    }

    updateActiveSection()

    window.addEventListener('hashchange', updateActiveSection)

    return () => {
      window.removeEventListener('hashchange', updateActiveSection)
    }
  }, [])

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <span className="logo-mark">B</span>
        <span>Brewlytics</span>
      </a>

      <div className="navbar-links">

        {/* HOW IT WORKS */}

        <a
          href="#story"
          className={`nav-link ${
            activeSection === 'story' ? 'active' : ''
          }`}
        >
          <span>How It Works</span>

          {activeSection === 'story' && (
            <motion.span
              layoutId="nav-pill"
              className="nav-pill"
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
        </a>


        {/* ABOUT */}

        <a
          href="#about"
          className={`nav-link ${
            activeSection === 'about' ? 'active' : ''
          }`}
        >
          <span>About</span>

          {activeSection === 'about' && (
            <motion.span
              layoutId="nav-pill"
              className="nav-pill"
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
        </a>


        {/* INSIGHTS */}

        <a
          href="#features"
          className={`nav-link ${
            activeSection === 'features' ? 'active' : ''
          }`}
        >
          <span>Insights</span>

          {activeSection === 'features' && (
            <motion.span
              layoutId="nav-pill"
              className="nav-pill"
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
        </a>

      </div>


      {/* ANALYZE CTA */}

      <a href="#analyze" className="navbar-cta">
        Analyze My Café
        <span>→</span>
      </a>
    </nav>
  )
}

export default Navbar