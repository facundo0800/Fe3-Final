import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favs from './Routes/Favs.jsx'
import Contact from './Routes/Contact.jsx'
import Detail from './Routes/Detail.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import { ThemeProvider } from './Components/utils/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<div><Navbar /><Contact /><Footer /></div>} />
        <Route path="/favs" element={<div><Navbar /><Favs /><Footer /></div>} />
        <Route path="/detail/:dentistId" element={<div><Navbar /><Detail /><Footer /></div>} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
