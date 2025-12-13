import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Creative Developer
          <span className="accent"> & Designer</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Building digital experiences that are bold, beautiful, and functional
        </motion.p>

        <motion.div variants={itemVariants} className="hero-buttons">
          <button className="btn btn-primary">
            <span>Explore Work</span>
            <span className="arrow">→</span>
          </button>
          <button className="btn btn-secondary">
            <span>Get in Touch</span>
          </button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p>Scroll to explore</p>
          <div className="scroll-dot"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
