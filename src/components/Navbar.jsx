import React from 'react'
import './Navbar.css'
import bclogo from './media/bclogo.png'

const Navbar = ({ scrollToSection }) => {
  const gotoStartedClick1 = () => {
    window.open('https://maps.app.goo.gl/ctj3MGKcTEuBKk2K9', '_blank');
  };
  return (
    <>
        <nav>
            <ul>
                <li onClick={() => scrollToSection('Menu')}>Menu</li>
                <li onClick={gotoStartedClick1}>Location</li>
                <img src={bclogo} />
                <li onClick={() => scrollToSection('Services')}>Services</li>
                <li onClick={() => scrollToSection('Contact')}>Contact</li>
            </ul>

        </nav>
    </>
  )
}

export default Navbar