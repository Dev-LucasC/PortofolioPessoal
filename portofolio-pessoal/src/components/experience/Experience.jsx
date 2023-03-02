import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience' data-aos="fade-up" >
      <h5>Minhas Habilidades</h5>
      <h2>Minha experiencia</h2>
  
      <div className="container experience__container" data-aos="fade-in">
        
          <div className="experience__frontend">

            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-ligth'>Experiente</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-ligth'>Experiente</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-ligth'>Experiente</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>ReactJS</h4>
                  <small className='text-ligth'>Experiente</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>BootStrap</h4>
                  <small className='text-ligth'>Iniciante</small>
                </div>
              </article>
            </div>
          </div>
    


        {/* =========== DIvisao entre divs ========================= */}

        <div className="experience__backend">
          <div className="experience__frontend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>NodeJS</h4>
                  <small className='text-ligth'>Experiente</small>
                </div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-ligth'>Experiente</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-ligth'>Experiente</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>PostgreSQL</h4>
                  <small className='text-ligth'>Experiente</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>BootStrap</h4>
                  <small className='text-ligth'>Iniciante</small>
                </div>
              </article>

            </div>
          </div>

        </div>


      </div>
    </section>
  )
}

export default experience
