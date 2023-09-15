import React from 'react';
import { useNavigate } from 'react-router-dom';

const DentistList = ({ dentists, onToggleFavorite, isFavorite }) => {
  const navigate = useNavigate();

  const redirectToDetail = (dentistId) => {
    navigate(`/detail/${dentistId}`);
  };

  const handleFavoriteClick = (event, dentist) => {
    event.stopPropagation();
    if (isFavorite(dentist)) {
      onToggleFavorite(dentist);
    } else {
      onToggleFavorite(dentist);
    }
  };

  return (
    <div className='dentist-list'>
      {dentists.map((dentist) => (
        <div
          key={dentist.id}
          className="dentist-card"
          onClick={() => redirectToDetail(dentist.id)}
        >
          <img src="../public/images/doctor.jpg" alt="Dentist" />
          <h3>{dentist.name}</h3>
          <p>{dentist.username}</p>
          <button onClick={(event) => handleFavoriteClick(event, dentist)}>
            {isFavorite(dentist) ? "Eliminar de Favoritos" : "Añadir a Favoritos"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DentistList;