
import './portofolio.css'
import { useEffect, useState } from "react";
import axios from "axios";




const Portofolio = () => {

  const [posts, setPosts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    axios
      .get("https://hammerhead-app-5cwy4.ondigitalocean.app/api/portofolios")
      .then((response) => {
        const { data } = response.data;
        setPosts(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://hammerhead-app-5cwy4.ondigitalocean.app/api/upload/files")
      .then((response) => {
        const { data } = response;
        const urls = data.map(file => 'https://hammerhead-app-5cwy4.ondigitalocean.app' + file.url);
        setImageUrls(urls);
      });
  }, []);



  return (




    <section id='portofolio' data-aos="fade-up" >
      <h5>Meus trabalhos recentes</h5>
      <h2>Portofolio</h2>
      <main className="container portfolio__container">
        {posts.map((post, index) => (

          <article className='portfolio__item'>
            <div className='portofolio__item-img'>
              <img src={imageUrls[index]} alt="" />
            </div>
            <h3>{post?.attributes?.title}</h3>
            <div className='portofolio__item-cta'>
              <a href="#" className='btn' target='_blank'>GitHub</a>
              <a href='#' className='btn btn-primary' target='_blank'>Site Demo</a>
            </div>

          </article>

        ))}
      </main>
    </section>

  );

  {/* return (
    <section id='portofolio' data-aos="fade-up">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container"  >
              <article key={id} className='portfolio__item'>
                <div className='portofolio__item-img'>
                <img src={imageUrls[index]} alt="" />
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
      */}
}

export default Portofolio
