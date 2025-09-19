import React from 'react'
import { FaHome, FaUser, FaBook} from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceFill /></a>
      <a href="#works" onClick={() => setActiveNav('#works')} className={activeNav === '#works' ? 'active': ''}><FaTasks /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><MdMessage /></a>
    </nav>
  )
}

export default Navbar
