import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const Detail = () => {
  const { dentistId } = useParams();

  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${dentistId}`)
      .then((response) => response.json())
      .then((data) => {
        setDentist(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dentistId]);

  if (!dentist) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Details</h1>
        <div className='detail-card'>
          <img src="../public/images/doctor.jpg" alt="Dentist" />
          <p>Name: {dentist.name}</p>
          <p>Username: {dentist.username}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
    </div>
  );
}

export default Detail;