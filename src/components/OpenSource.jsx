import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faCloud } from '@fortawesome/free-solid-svg-icons'
import './OpenSource.css'

export default function OpenSource() {
  const contributions = [
    {
      id: 1,
      type: 'Open Source Contribution',
      title: 'OSCI - Open Source Contribution Initiative',
      organization: 'Open Source Community Initiative',
      period: 'Aug 15 - Sep 7, 2025',
      description: 'Contributed to open-source projects, improving code quality and documentation. Collaborated with the developer community to create meaningful contributions.',
      technologies: ['Git', 'GitHub', 'JavaScript', 'React'],
      achievements: [
        'Submitted pull requests to active repositories',
        'Fixed bugs and improved code quality',
        'Enhanced documentation and README files',
        'Received certificate of appreciation'
      ],
      icon: <FontAwesomeIcon icon={faCodeBranch} />,
      color: 'linear-gradient(135deg, #00d4ff, #8338ec)'
    },
    {
      id: 2,
      type: 'Certification Program',
      title: 'Google Cloud Arcade Facilitator Program',
      organization: 'Google Cloud',
      period: '2025 Cohort-2 (Pending Completion)',
      description: 'Participating in the Google Cloud Arcade Facilitator Program to learn cloud technologies and help others in the community understand cloud computing fundamentals.',
      technologies: ['Google Cloud', 'Cloud Computing', 'Infrastructure'],
      achievements: [
        'Learning Google Cloud fundamentals',
        'Completing hands-on labs and quests',
        'Facilitating learning for peer students',
        'Certificate pending upon completion'
      ],
      icon: <FontAwesomeIcon icon={faCloud} />,
      color: 'linear-gradient(135deg, #8338ec, #ff006e)'
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="opensource">
      <div className="opensource-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Open Source & Certifications</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">Contributing to the community and continuous learning</p>
        </motion.div>

        <motion.div 
          className="contributions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contributions.map((contribution) => (
            <motion.div
              key={contribution.id}
              className="contribution-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-header">
                <div className="card-icon">{contribution.icon}</div>
                <div className="card-title-group">
                  <p className="contribution-type">{contribution.type}</p>
                  <h3>{contribution.title}</h3>
                </div>
              </div>

              <p className="organization">{contribution.organization}</p>
              <p className="period">{contribution.period}</p>

              <p className="contribution-description">{contribution.description}</p>

              <div className="tech-stack">
                {contribution.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {contribution.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
