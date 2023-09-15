import React, { useState, useEffect } from 'react';
import DentistList from './DentistList.jsx';

const Card = () => {
  const [dentists, setDentists] = useState([]);
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setDentists(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteDentists(storedFavorites);
  }, []);

  const toggleFavorite = (dentist) => {
    const updatedFavorites = [...favoriteDentists];
    const dentistIndex = updatedFavorites.findIndex((favDentist) => favDentist.id === dentist.id);

    if (dentistIndex !== -1) {
      updatedFavorites.splice(dentistIndex, 1);
    } else {
      updatedFavorites.push(dentist);
    }

    setFavoriteDentists(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <DentistList dentists={dentists} onToggleFavorite={toggleFavorite} isFavorite={(dentist) => favoriteDentists.some((favDentist) => favDentist.id === dentist.id)} />
    </div>
  );
};

export default Card;