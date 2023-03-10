import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portofolio from './components/portofolio/Portofolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



export const App = () => {
  return (
    <>
      <Header/>
      <Nav />
      <Experience />
      <Portofolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
