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

            {/* 
            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ Trabalhos realizados</small>
            </article>
              */}
            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>30+ Projetos realizados</small>
            </article>
          </div>
          <p>
          Como desenvolvedor Full-Stack, tenho expertise em diversas tecnologias, e estou sempre em busca de novos desafios e aprendizados. Além disso, estou me especializando em Análise e Desenvolvimento de Sistemas, visando ampliar meus conhecimentos e me destacar ainda mais na minha carreira. Se você está procurando alguém com paixão pelo desenvolvimento de software, entre em contato!
          </p>
          <a href="#contact" className='btn btn-primary'>Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default About
