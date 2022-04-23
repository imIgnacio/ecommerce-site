import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
        <img src={`assets/images/familiaPetLogo.JPG`} alt='Logo' className='logo-image'/>
        <ul className="menu1">
            <li>Home🏠</li>
            <li>About❓</li>
            <li>Contact📍</li>
            <li>Sign Up🎉</li>
            <li>Login🔏</li>
      </ul>
    </header>
  )
}

export default Header