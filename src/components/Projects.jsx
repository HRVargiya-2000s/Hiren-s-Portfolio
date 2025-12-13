import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './Projects.css'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'FixItNow',
      subtitle: 'Citizen Issue Resolver',
      description: 'Urban-Company type Platform',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase Auth', 'Cloudinary'],
      color: 'gradient-blue',
      github: 'https://github.com/HRVargiya-2000s/fixItNow.git',
      features: ['Google OAuth Login', 'GPS Location Tracking', 'Image Upload', 'Worker Dashboard', 'Reviews & Ratings'],
      fullDescription: 'FixItNow aims to provide a complete, end-to-end web platform that connects users who have repair issues with skilled freelance workers through a secure, location-aware, and role-based system. The core goal is to simplify problem reporting, job discovery, and task management by offering dedicated portals for users and freelancers, all backed by a robust API. The platform focuses on accessibility, reliability, and real-world usability, from DIY guidance to full job tracking and payments.',
      userFeatures: ['Secure Login & Signup', 'Repair Issue Reporting', 'Issue Tracking', 'DIY Repair Guides'],
      workerFeatures: ['Job Discovery System', 'Job Acceptance & Status Updates', 'Earnings & Work Statistics', 'Ratings & Availability Control'],
      techStack: 'HTML, CSS, JS, Cloudinary & Firebase'
    },
    {
      id: 2,
      title: 'StacKit',
      subtitle: 'Q&A Platform',
      description: 'Quora like Q&A Platform',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'RestAPI'],
      color: 'gradient-purple',
      github: 'https://github.com/HRVargiya-2000s/stackit---A-minimal-web-app-for-QnA.git',
      features: ['Rich Text Editor', 'Voting System', 'Tag Filtering', 'Notifications', 'Search & Filter'],
      fullDescription: 'StackIt aims to provide a simple, lightweight Question & Answer platform that enables collaborative learning and structured knowledge sharing without requiring any backend setup. The project focuses on usability, clarity, and rich content creation, allowing users to ask questions, post formatted answers, and surface high-quality responses through voting and acceptance mechanisms. It is designed primarily as a learning, demo, and portfolio-ready frontend application.',
      keyFeatures: ['Simplified Authentication', 'Question & Answer System', 'Voting & Accepted Answers', 'Tagging, Search & Filtering', 'Session Persistence'],
      techStack: 'HTML, CSS, JavaScript, PHP, MySQL, RestAPI'
    },
    {
      id: 3,
      title: 'StudyHub',
      subtitle: 'Classroom Study Portal',
      description: 'React based Classroom Study Portal',
      tech: ['React.js', 'Tailwind CSS', 'Material UI', 'Firebase'],
      color: 'gradient-cyan',
      github: 'https://github.com/HRVargiya-2000s/StudyHub.git',
      features: ['Teacher Dashboard', 'Material Upload', 'Real-time Updates', 'Responsive Design', 'Firebase Auth'],
      fullDescription: 'StudyHub aims to provide a secure, collaborative platform where students can share, organize, and access academic study materials in real time, while ensuring proper access control based on user roles and class membership.',
      keyFeatures: ['Secure User Authentication', 'Centralized Material Management', 'Cloud File Storage & Retrieval', 'Class-Based Data Segregation', 'Search and Category-Based Filtering'],
      techStack: 'React.js, Tailwind CSS, Material UI, Firebase'
    },
    {
      id: 4,
      title: 'LDBuddy',
      subtitle: 'College Chatbot Assistant',
      description: 'A Chatbot for LDCE related Query.',
      tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'JSON'],
      color: 'gradient-pink',
      github: 'https://github.com/HRVargiya-2000s/LDBuddy.git',
      features: ['FAQ Database', 'Chat History', 'Drag & Drop', 'Profile Storage', 'Export Chat'],
      fullDescription: 'LDBuddy aims to provide a simple, offline-friendly chatbot-style interface that helps students quickly access college-related information for LDCE and GTU without relying on any backend or server. The project focuses on fast access to FAQs, exam information, and important links using a clean chat-based UI built entirely with frontend technologies. It is designed for local use, easy customization, and academic or portfolio demonstration purposes.',
      keyFeatures: ['Profile Storage Using localStorage', 'FAQ-JSON-Based Question Answering', 'Session-Based Multi-Chat Handling', 'Export chat'],
      techStack: 'HTML, CSS, JS, LocalStorage, JSON data'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }



  return (
    <section className="projects">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">Showcasing my best work and technical expertise</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
            >
              <div className="card-inner">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="card-buttons">
                    <motion.button 
                      className="view-btn"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View More
                    </motion.button>
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Glossy Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-dialog"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              <div className="modal-content">
                <div className={`modal-thumbnail ${selectedProject.color}`}></div>

                <div className="modal-info">
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-subtitle">{selectedProject.subtitle}</p>
                  
                  <div className="modal-section">
                    <h3>About</h3>
                    <p>{selectedProject.fullDescription}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Key Features</h3>
                    {selectedProject.keyFeatures && (
                      <div className="features-grid">
                        {selectedProject.keyFeatures.map((feature, idx) => (
                          <motion.div 
                            key={idx}
                            className="feature-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="feature-icon">✓</span>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {selectedProject.userFeatures && (
                      <div className="feature-category">
                        <h4>For Users:</h4>
                        <div className="features-grid">
                          {selectedProject.userFeatures.map((feature, idx) => (
                            <motion.div 
                              key={idx}
                              className="feature-item"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <span className="feature-icon">✓</span>
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedProject.workerFeatures && (
                      <div className="feature-category">
                        <h4>For Workers:</h4>
                        <div className="features-grid">
                          {selectedProject.workerFeatures.map((feature, idx) => (
                            <motion.div 
                              key={idx}
                              className="feature-item"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (idx + selectedProject.userFeatures.length) * 0.1 }}
                            >
                              <span className="feature-icon">✓</span>
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                    {!selectedProject.keyFeatures && !selectedProject.userFeatures && (
                      <div className="features-grid">
                        {selectedProject.features.map((feature, idx) => (
                          <motion.div 
                            key={idx}
                            className="feature-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="feature-icon">✓</span>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="modal-section">
                    <h3>Tech Stack</h3>
                    <div className="tech-grid">
                      {selectedProject.tech.map((tech, idx) => (
                        <motion.span 
                          key={idx}
                          className="tech-badge"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
