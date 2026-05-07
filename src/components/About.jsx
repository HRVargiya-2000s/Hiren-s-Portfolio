"use client"

import { motion } from "framer-motion"
import "./About.css"

export default function About() {
  const aboutPoints = [
    "IT Engineering student at L.D. College of Engineering, Ahmedabad",
    "Currently in 6th semester (Pre-Final Year)",
    "Passionate about web development and cloud technologies",
    "Front-End developer with React, Firebase, and cloud experience",
    "TPO coordinator @ T&P cell LDCE",
    "Active in hackathons and open-source communities",
  ]

  const stats = [
    { value: "8.13", label: "CGPA" },
    { value: "4+", label: "Projects Completed" },
    { value: "2027", label: "Expected Graduation" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="about">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">Here some information about myself</p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-left" variants={itemVariants}>
            <ul className="about-list">
              {aboutPoints.map((point, idx) => (
                <motion.li key={idx} variants={itemVariants}>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="about-right" variants={itemVariants}>
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <motion.div key={idx} className="stat-card" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
