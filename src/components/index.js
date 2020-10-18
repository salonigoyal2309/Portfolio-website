import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './home.js'
import Profile from './profile.js'
import Skills from './skills.js'
import Projects from './projects.js'
import Contact from './contact.js'
import TopBar from './topbar.js'
import '../styles/style.css'

function Index(){
  return(
    <>
      <Router>
        <TopBar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <Profile/>
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Router>
    </>
  )
}
export default Index