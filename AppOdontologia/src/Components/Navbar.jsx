import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import {useTheme} from './utils/ThemeContext';

const Navbar = () => {

  const { modoOscuro, toggleModoOscuro } = useTheme();

  return (
    <nav className={`nav ${modoOscuro ? 'dark' : ''}`}>
      
      <a className='home' href="/">Home</a>
      <a href="/contact">Contact</a>
      <a className='favs' href="/favs">Favs</a>

      <button className={`boton-modo ${modoOscuro ? 'button-light' : 'button-dark'}`} onClick={toggleModoOscuro}>
      <FontAwesomeIcon icon={faMoon} size="lg" style={{color: "#f2ec40",}} />
      </button>
    </nav>

  )
}

export default Navbar