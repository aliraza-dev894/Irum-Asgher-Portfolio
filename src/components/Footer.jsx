import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Irum Asgher</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#works'>Portfolio</a></li>
        <li><a href='#testinomials'>Testinomials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
          <a href="mailto:iramasghar551@gmail.com" target='_blank'><MdEmail/></a>
          <a href="https://facebook.com/profile.php?id=61579881783843" target='_blank'><FaFacebook/></a>
          <a href="https://instagram.com/irumraoia09"><FaInstagram/></a>
          <a href="https://wa.me/923231351440"><FaWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2025 Irum Asgher | All Rights Reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
