import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    tittle: 'Teste de titulo por array .map',
    github: 'https://github.com',
    demo: 'https://algumacoisa'
  },
  {
    id: 2,
    image: IMG2,
    tittle: 'Teste de titulo por array .map',
    github: 'https://github.com',
    demo: 'https://algumacoisa'
  },
  {
    id: 3,
    image: IMG3,
    tittle: 'Teste de titulo por array .map',
    github: 'https://github.com',
    demo: 'https://algumacoisa'
  },
  {
    id: 4,
    image: IMG4,
    tittle: 'Teste de titulo por array .map',
    github: 'https://github.com',
    demo: 'https://algumacoisa'
  },
  {
    id: 5,
    image: IMG5,
    tittle: 'Teste de titulo por array .map',
    github: 'https://github.com',
    demo: 'https://algumacoisa'
  },
  {
    id: 6,
    image: IMG6,
    tittle: 'Teste de titulo por array .map',
    github: 'https://github.com',
    demo: 'https://algumacoisa'
  }
]





const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portofolio</h2>


      <div className="container portfolio__container">
        {
          data.map(({ id, image, tittle, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portofolio__item-img'>
                  <img src={image} alt={tittle} />
                </div>
                <h3>{tittle}</h3>
                <div className='portofolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Site Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portofolio
