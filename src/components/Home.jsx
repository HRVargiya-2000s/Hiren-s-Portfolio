import { motion } from 'framer-motion'
import './Home.css'

export default function Home({ setActiveSection }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50, rotateY: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { duration: 0.8 }
    }
  }

  const floatingAnimation = {
    animate: { 
      y: [0, -20, 0],
      rotateZ: [0, 2, -2, 0]
    },
    transition: { 
      duration: 4, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const handleDownloadCV = () => {
    // Create a link element for CV download
    const link = document.createElement('a')
    link.href = '/Hiren_Vargiya_CV.pdf'
    link.download = 'Hiren_Vargiya_CV.pdf'
    link.click()
  }

  const handleAboutClick = () => {
    setActiveSection('about')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="home">
      <motion.div 
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header - Full Width */}
        <motion.div 
          className="home-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Welcome to My Portfolio</h2>
          <div className="header-line"></div>
        </motion.div>

        {/* Left Content Section */}
        <motion.div className="home-content">
          <motion.h1 variants={itemVariants} className="home-title">
            Hiren Vargiya
            <span className="accent"> IT Engineer</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="home-subtitle-text">
            Crafting <span className="accent">modern web, mobile, and AI</span> experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="home-buttons">
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
            >
              <span>Download CV</span>
              <span className="arrow">↓</span>
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAboutClick}
            >
              <span>About Me</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right 3D Image Section */}
        <motion.div 
          className="home-image-section"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div 
            className="profile-image-wrapper"
          >
            <div className="image-frame">
              <img 
                src="/profile-image.jpeg" 
                alt="Hiren Vargiya" 
                className="profile-image"
              />
              <div className="image-glow"></div>
            </div>
            </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
