import { motion } from 'motion/react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <span className="logo-mark">B</span>
        <span>Brewlytics</span>
      </a>

      <div className="navbar-links">
        <a href="#story" className="nav-link active">
          <span>How It Works</span>
          <motion.span
            layoutId="nav-pill"
            className="nav-pill"
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
            }}
          />
        </a>

        <a href="#features" className="nav-link">
          Insights
        </a>

        <a href="#about" className="nav-link">
          About
        </a>
      </div>

      <a href="#analyze" className="navbar-cta">
        Analyze My Café
        <span>→</span>
      </a>
    </nav>
  )
}

export default Navbar