import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
      <main className='overflow-x-hidden text-neutral-800'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Reviews />
        <ContactUs />
      </main>
  )
}

export default App
