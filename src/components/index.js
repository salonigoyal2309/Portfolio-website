import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home.js'
import Profile from './profile.js'
import Projects from './projects.js'
import Contact from './contact.js'
import TopBar from './topbar.js'
import '../styles/style.css'

function Index(){
  return(
    <>
      <Router>
        <TopBar />
        <Route path="/profile" component={Profile} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Router>
    </>
  )
}
export default Index