import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Campus Ambassador',
      company: 'CampusCrew',
      period: 'Dec 2025 - Present',
      description: 'Acting as a Campus Ambassador, responsible for promoting and engaging with students, organizing campus events, and bridging communication between the organization and student community.',
      responsibilities: [
        'Organize and promote campus events and activities',
        'Engage with student community and gather feedback',
        'Represent the organization at college functions',
        'Build relationships with student clubs and organizations'
      ],
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      color: 'linear-gradient(135deg, #ff006e, #00d4ff)'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="experience">
      <div className="experience-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Experience</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">Roles and responsibilities in my professional journey</p>
        </motion.div>

        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <div className="marker-circle">{exp.icon}</div>
                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              <motion.div
                className="experience-card"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="exp-header">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>

                <p className="exp-period">{exp.period}</p>
                <p className="exp-description">{exp.description}</p>

                <div className="responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
