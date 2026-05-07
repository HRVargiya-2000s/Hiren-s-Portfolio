import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      label: 'GitHub', 
      link: 'https://github.com/HRVargiya-2000s',
      icon: faGithub
    },
    { 
      label: 'LinkedIn', 
      link: 'https://www.linkedin.com/in/hrvargiya-2000s',
      icon: faLinkedinIn
    },
    { 
      label: 'Email', 
      link: 'mailto:hrvargiya.edu.124@gmail.com',
      icon: faEnvelope
    },
    { 
      label: 'Phone', 
      link: 'tel:+918141375970',
      icon: faPhone
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-divider-top"></div>
      
      <div className="footer-top">
        <h2 className="footer-heading">Get in Touch</h2>
        
        <div className="social-links">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target={social.label !== 'Email' && social.label !== 'Phone' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="social-icon-circle"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title={social.label}
            >
              <FontAwesomeIcon icon={social.icon} className="icon-fa" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {currentYear} Hiren Vargiya. | Designed & Developed with passion
        </p>
      </div>
    </footer>
  )
}
