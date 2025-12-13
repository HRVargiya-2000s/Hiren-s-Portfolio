import { motion } from 'framer-motion'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'React.js' },
        { name: 'Tailwind CSS' },
        { name: 'Framer Motion' }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MySQL' },
        { name: 'MongoDB' },
        { name: 'Firebase Realtime DB' },
        { name: 'JSON' }
      ]
    },
    {
      category: 'Tools & Cloud',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Firebase Auth' },
        { name: 'Google Cloud' },
        { name: 'Cloudinary' },
        { name: 'Vite' }
      ]
    },
    {
      category: 'Programming',
      skills: [
        { name: 'C' },
        { name: 'C++' },
        { name: 'Java' },
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'PHP' }
      ]
    },
    {
      category: 'Libraries',
      skills: [
        { name: 'NumPy' },
        { name: 'Pandas' },
        { name: 'Font Awesome' },
        { name: 'Framer Motion' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } }
  }

  return (
    <section className="skills">
      <div className="skills-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">Technologies and tools I'm proficient with</p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="skill-category"
              variants={categoryVariants}
            >
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    className="skill-item"
                    variants={skillVariants}
                    whileHover={{ scale: 1.15, rotate: 2 }}
                  >
                    <span className="skill-name">{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
