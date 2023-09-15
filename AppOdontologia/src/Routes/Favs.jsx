import React, { useState, useEffect } from 'react';
import DentistList from '../Components/DentistList.jsx';

const Favs = () => {
  const [favoriteDentists, setFavoriteDentists] = useState([]);
  const [dentists, setDentists] = useState([]);

  const isFavorite = (dentist) => {
    return favoriteDentists.some((favDentist) => favDentist.id === dentist.id);
  };

  useEffect(() => {
    // Cargar los dentistas desde una fuente de la API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setDentists(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Cargar los favoritos desde el localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteDentists(storedFavorites);
  }, []);

  const removeFavorite = (dentist) => {
    const updatedFavorites = favoriteDentists.filter(
      (favDentist) => favDentist.id !== dentist.id
    );
    setFavoriteDentists(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const favoriteDentistsToShow = dentists.filter((dentist) => isFavorite(dentist));

  return (
    <>
      <h1>Dentists Favs</h1>
      {favoriteDentistsToShow.length === 0 ? (
        <p className='noFavs'>Aún no tienes dentistas favoritos</p>
      ) : (
        <DentistList
          dentists={favoriteDentistsToShow}
          isFavorite={isFavorite}
          onToggleFavorite={removeFavorite}
        />
      )}
    </>
  );
};

export default Favs;