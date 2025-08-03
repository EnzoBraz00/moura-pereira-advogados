import React from 'react'
import './HeaderComponent.css'
import logo from '../../assets/firm-logo.png'

const HeaderComponent = () => {
  return (
    <div className='header-container'>
        <div className='header-top'>
            <p>(11) 97448-1602</p>
        </div>
        <div className='header-content'>
            <img src={logo} alt="Moura Pereira Advogados Logo" className='header-logo' />
            <div className='header-quick-access'>
                <a href="#home" className='header-link'>HOME</a>
                <a href="#about" className='header-link'>ÁREAS</a>
                <a href="#services" className='header-link'>CONTATO</a>
                <a href="#contact" className='header-link'>POSTS</a>
            </div>
        </div>
    </div>
  )
}

export default HeaderComponent