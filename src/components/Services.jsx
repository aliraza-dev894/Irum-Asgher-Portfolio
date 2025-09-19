import React from 'react'
import { BiCheck } from "react-icons/bi";

const Skills = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        
        
        <article className='service'>
          <div className='service__head'>
            <h3>Teaching</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I teach early childhood basics with fun and engaging methods.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I make learning creative through exciting art and craft activities.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I develop speaking skills with storytelling and rhymes.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I assist children in completing homework with ease.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I provide interactive online tuition classes for kids.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I build good manners and social skills through playful learning.</p>
            </li>
          </ul>
        </article>
        
        
                    {/*End of Teching*/}

          <article className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I design responsive websites that work smoothly on all devices.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I create modern and attractive user interfaces with clean layouts.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I develop interactive features using HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I build websites with frameworks like Bootstrap and Tailwind CSS.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I ensure fast loading, SEO-friendly, and user-friendly web pages.</p>
            </li>
          </ul>
        </article>
        
        
                    {/*End of Teching*/}

          <article className='service'>
          <div className='service__head'>
            <h3>Microsoft Office</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I create and format professional documents in MS Word.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I manage data, reports, and calculations efficiently in MS Excel.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I design engaging and creative presentations in MS PowerPoint.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I prepare charts, tables, and visuals to make information clear.</p>
            </li>
            <li>
              <BiCheck className='serive__list-icon'/>
              <p>I provide well-organized files for business, study, and personal use.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Skills
