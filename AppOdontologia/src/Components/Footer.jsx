import React from 'react'
import {useTheme} from './utils/ThemeContext';

const Footer = () => {
  const { modoOscuro } = useTheme();

  return (
    
    <footer className={`footer ${modoOscuro? 'footer-dark' : ''}`}>
        <p>Powered by</p>
        <img src="../public/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
