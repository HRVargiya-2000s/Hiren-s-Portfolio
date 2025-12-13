import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import './Hackathons.css'

export default function Hackathons() {
  const hackathons = [
    {
      id: 1,
      title: 'CVM Hackathon 3.0',
      date: 'Feb 14-15, 2025',
      description: 'Participated in an intensive 48-hour hackathon showcasing innovative ideas and technical problem-solving skills. Collaborated with team members to develop solutions under time constraints.',
      technologies: ['HTML', 'CSS', 'JS', 'HandleBars', 'MongoDB'],
      status: 'Completed',
      color: 'linear-gradient(135deg, #00d4ff, #8338ec)',
      icon: <FontAwesomeIcon icon={faLaptop} />
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
    <section className="hackathons">
      <div className="hackathons-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Hackathons & Events</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">My journey in competitive coding and innovation</p>
        </motion.div>

        <motion.div 
          className="hackathons-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hackathons.map((hackathon) => (
            <motion.div
              key={hackathon.id}
              className="hackathon-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(0, 212, 255, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-icon">{hackathon.icon}</div>
              
              <div className="hackathon-header">
                <h3>{hackathon.title}</h3>
                <p className="hackathon-date">{hackathon.date}</p>
              </div>

              <p className="hackathon-description">{hackathon.description}</p>

              <div className="tech-stack">
                {hackathon.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="hackathon-status">
                <a 
                  href="https://www.linkedin.com/posts/hrvargiya-2000s_hackathon-cvmuniversity-innovation-activity-7302673868794531840-2pCl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ1lf0BeZzIyFYGbk-e6yiWgIE1oJhf2us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-details-btn"
                >
                  More Details
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
