import React from 'react'
import './HeaderComponent.css'
import logo from '../../assets/firm-logo.png'
import { Link, useNavigate } from 'react-router-dom'

const HeaderComponent = () => {
  const navigate = useNavigate();
  function handleLogoNavigation(){
      navigate("/")
  }
  return (
    <div className='header-container'>
        <div className='header-top'>
            <p>(11) 97448-1602</p>
        </div>
        <div className='header-content'>
            <img onClick={() => handleLogoNavigation()} src={logo} alt="Moura Pereira Advogados Logo" className='header-logo' />
            <div className='header-quick-access'>
                <Link to="/" className='header-link'>HOME</Link>
                <Link to="/working-area" className='header-link'>ÁREAS</Link>
                <Link to="/blog" className='header-link'>POSTS</Link>
                <Link to="/contact" className='header-link'>CONTATO</Link>
            </div>
        </div>
    </div>
  )
}

export default HeaderComponent