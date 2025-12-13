import { motion } from 'framer-motion'
import { useState } from 'react'
import './Navigation.css'

export default function Navigation({ activeSection, setActiveSection }) {
  const navItems = ['home', 'projects', 'skills', 'hackathons', 'experience', 'opensource']
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringLogo, setIsHoveringLogo] = useState(false)

  const handleMouseMove = (e) => {
    const element = e.currentTarget
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 5
    const rotateY = (centerX - x) / 5

    setMousePosition({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setMousePosition({ rotateX: 0, rotateY: 0 })
    setIsHoveringLogo(false)
  }

  const handleMouseEnter = () => {
    setIsHoveringLogo(true)
  }

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: '1000px',
          }}
        >
          <div
            className="logo-3d"
            style={{
              transform: `rotateX(${mousePosition.rotateX}deg) rotateY(${mousePosition.rotateY}deg)`,
              transformStyle: 'preserve-3d',
              transition: isHoveringLogo ? 'none' : 'transform 0.3s ease-out',
            }}
          >
            <span className="logo-text">HIREN VARGIYA</span>
          </div>
        </motion.div>
        
        <ul className="nav-links">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setActiveSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
