import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Message sent! I\'ll get back to you soon.')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">Let's connect and create something amazing together</p>
        </motion.div>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="contact-info">
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:name.surname.124@gmail.com">name.surname.124@gmail.com</a>
                </p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91 8989895252</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Ahmedabad, India</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">💼</span>
              <div>
                <h4>Connect With Me</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/hrvargiya-2000s" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                  <a href="https://github.com/HRVargiya-2000s" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="contact-form"
          >
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              className="form-input"
            />
            
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              className="form-input"
            />
            
            <input 
              type="text" 
              placeholder="Subject" 
              required
              className="form-input"
            />
            
            <textarea 
              placeholder="Your Message" 
              rows="5"
              required
              className="form-textarea"
            ></textarea>
            
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
