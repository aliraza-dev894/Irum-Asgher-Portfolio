import React from 'react'
import AVTR1 from '../assets/avtr1.jpg'
import AVTR2 from '../assets/avtr2.jpg'
import AVTR3 from '../assets/avtr3.jpg'
import AVTR4 from '../assets/avtr4.jpg'
import AVTR5 from '../assets/avtr5.png'

import {Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
  avatar: AVTR1,
  title: 'Allesia',
  review: "She created a beautiful and responsive front-end design that exceeded my expectations.The layout is clean, user-friendly, and delivered exactly on time.I’m very happy with the result!"
    },
    {
  avatar: AVTR2,
  title: 'Abdul Rehman',
  review: "Miss Irum is a wonderful teacher. My child has improved a lot in learning and enjoys every class. Her teaching style is interactive and very effective."
    },
    {
  avatar: AVTR3,
  title: 'Fatima Batool',
  review: "My child loves her classes and always looks forward to learning. Miss Irum makes lessons fun and creative, especially with art and craft activities."
    },
    {
  avatar: AVTR4,
  title: 'Ayesha',
  review: "She created a beautiful and user-friendly UI/UX design for my project. The layout is clear, modern, and makes navigation very easy. I’m really happy with the work."
    },
    {
  avatar: AVTR5,
  title: 'Ali Raza',
  review: "She provided excellent support with MS Word and Excel tasks. The work was accurate, well-organized, and delivered on time. Very professional service."
    }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Parents & Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
      {
        data.map(({avatar, title, review}, index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar}/>
            </div>
            <h5 className="client__name">{title}</h5>
              <small className="client__review">{review}</small>
        </SwiperSlide>
          )
        })
      }
        
      </Swiper>
    </section>
  )
}

export default Testimonials
