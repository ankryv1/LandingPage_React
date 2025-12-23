import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
  return (
      <main >
        <Navbar />
        <div className='overflow-x-hidden text-neutral-800'>
          
        <Hero />
        <About />
        <Projects />
        <Reviews />
        <ContactUs />
        <Footer />
        </div>
      </main>
  )
}

export default App
