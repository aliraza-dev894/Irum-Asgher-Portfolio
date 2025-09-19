import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__teaching'>
          
          
          <h3>Teachig</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>Creative Lesson Planning</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Child-Centered Teaching</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>Art & Craft</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>Classroom Management</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>Communication</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>Online Teaching</h4>
              <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>CSS</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>UI/UX</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>Responsive Design</h4>
              <small>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>Designing Tools</h4>
              <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__office'>
        <h3>MS Office</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>MS Word</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>MS Excel</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>MS PowerPoint</h4>
              <small>Intermediate</small>
              </div>
            </article>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience
