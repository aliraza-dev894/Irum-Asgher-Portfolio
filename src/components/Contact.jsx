import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <a href="mailto:iramasghar551@gmail.com" target='_blank'>Send Message</a>
          </article>

          <article className='contact__option'>
            <FaFacebook className='contact__option-icon' />
            <h4>Facebook</h4>
            <a href="https://facebook.com/profile.php?id=61579881783843" target='_blank'>Send Message</a>
          </article>

          <article className='contact__option'>
            <FaInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <a href="https://instagram.com/irumraoia09">Send Message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://wa.me/923231351440">Send Message</a>
          </article>
        </div>
        {/*End Contact Options*/}
       
        <form action="mailto:iramasghar551@gmail.com">
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' placeholder='Your Message' rows='14' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
