import React from 'react'
import ME from '../assets/about-me.jpeg'
import { FaAward, FaFolderPlus  } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Me" />

          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Teaching Experience</small>
            </article>

            <article className='about__card'>
              <PiStudent className='about__icon'/>
              <h5>Students</h5>
              <small>200+ City Schools</small>
            </article>

            <article className='about__card'>
              <FaFolderPlus  className='about__icon'/>
              <h5>Projects</h5>
              <small>60+ Completed</small>
            </article>
          </div>

          <p>
            I am a dedicated preschool teacher who loves working with young children 
            and making learning fun. With my art and craft skills, I add creativity to 
            every lesson so kids enjoy while they learn. I also provide online tuitions, 
            where I focus on building confidence and interest in learning through interactive activities.
          </p>
              <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
