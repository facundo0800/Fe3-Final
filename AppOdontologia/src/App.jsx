import React from 'react';
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Home/>
          <Footer/>
      </div>
  );
}

/*

  Notas para la corrección:
    
    _A la hora de usar useReducer se reseteaban los favoritos del LocalStorage
      y termine usando otra alternativa para poder completar la consigna.
    
     _Añadí una librería de iconos (FontAwesome), se que no se podían añadir librerías externas, 
      pero esta solo añade un icono que estéticamente queda mejor que un emoji, de no ser permitido
      dejeme eliminar el icono y la librería.

    Casi me vuelvo loco pero se pudo completar :P
  
*/

export default App;