import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import NotFoundPage from './components/NotFoundPage'
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Profile />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
