import React from 'react'
import IMG1 from '../assets/work1.jpg'
import IMG2 from '../assets/work2.jpg'
import IMG3 from '../assets/work3.jpg'
import IMG4 from '../assets/work4.jpg'
import IMG5 from '../assets/work5.jpg'
import IMG6 from '../assets/work6.webp'


const Works = () => {
  return (
    <section id='works'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG1} alt="Activity"/>
          </div>
          <h3>Outdoor Fun Activity</h3>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG2} alt="Activity"/>
          </div>
          <h3>Art & Craft</h3>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG3} alt="Activity"/>
          </div>
          <h3>Story Telling</h3>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG4} alt="Activity"/>
          </div>
          <h3>Frontend Designing</h3>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG5} alt="Activity"/>
          </div>
          <h3>UI/UX Designing</h3>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG6} alt="Activity"/>
          </div>
          <h3>MS Office Work</h3>
        </article>

      </div>
    </section>
  )
}

export default Works
