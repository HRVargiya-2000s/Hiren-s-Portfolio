import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import OpenSource from './components/OpenSource'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && <Home setActiveSection={setActiveSection} />}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'experience' && <Experience />}
      {activeSection === 'opensource' && <OpenSource />}
      {activeSection === 'contact' && <Contact />}
      
      <Footer />
    </div>
  )
}

export default App
