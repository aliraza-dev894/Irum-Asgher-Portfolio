import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://facebook.com/profile.php?id=61579881783843" target='_blank'><FaFacebook /></a>
        <a href="https://instagram.com/irumraoia09" target='_blank'><FaInstagram /></a>
        <a href="https://wa.me/923231351440" target='_blank'><FaWhatsapp /></a>
        <a href="mailto:iramasghar551@gmail.com" target='_blank'><MdEmail /></a>
    </div>
  )
}

export default HeaderSocial
