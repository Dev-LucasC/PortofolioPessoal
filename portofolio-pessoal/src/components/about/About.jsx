import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Saiba mais</h5>
      <h2>Sobre mim</h2>

      <div className="continer about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>1+ Anos de Trabalho</small>
            </article>
            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ Trabalhos realizados</small>
            </article>
            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>30+ Projetos realizados</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores aliquam, vel temporibus voluptatem ut velit adipisci iure voluptas sapiente beatae eum voluptatibus dolores accusamus quam aspernatur autem sint nesciunt.
            Ducimus illum architecto provident nihil quas. Error qui odit assumenda sunt mollitia magni fugit nobis repellendus, in ipsa eaque! Accusantium incidunt nobis placeat maiores doloremque exercitationem cumque illum maxime sunt.
            Adipisci qui ducimus ipsa eius quidem perspiciatis eos, dolorem tempora nemo beatae dolorum nostrum doloribus quibusdam repellat doloremque. Ut iure quibusdam laudantium aperiam quas ex vitae voluptas tenetur fuga similique.
            Adipisci veritatis error hic odio excepturi? Dolores minima consequuntur aliquam facere voluptate odio fuga quidem nisi maxime molestias, delectus assumenda atque officiis laborum in ex, velit adipisci expedita possimus reiciendis!
          </p>
          <a href="#contact" className='btn btn-primary'>Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default About
