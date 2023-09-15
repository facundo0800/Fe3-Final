import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const modoOscuroInicial = localStorage.getItem('modoOscuro') === 'true';
  const [modoOscuro, setModoOscuro] = useState(modoOscuroInicial);


  const toggleModoOscuro = () => {
    const nuevoModoOscuro = !modoOscuro;
    setModoOscuro(nuevoModoOscuro);
    localStorage.setItem('modoOscuro', nuevoModoOscuro);
  };

  useEffect(() => {
    localStorage.setItem('modoOscuro', modoOscuro);
  }, [modoOscuro]);

  return (
    <ThemeContext.Provider value={{ modoOscuro, toggleModoOscuro }}>
      <div className={`app ${modoOscuro ? 'dark' : 'light'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;



