import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou </h5>
        <h1>Lucas da Conceição</h1>
        <h5 className="text-ligth">FullSatck Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
