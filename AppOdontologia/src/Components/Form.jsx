import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del nombre de usuario
    if (formData.username.length < 6) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        username: 'El nombre de usuario debe tener al menos 6 caracteres',
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        username: '',
      }));
    }

    // Validación del correo electrónico
    if (!formData.email.includes('@') || !formData.email.includes('.com')) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'El correo electrónico debe contener "@" y ".com"',
      }));
    } else {

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));


      if (
        formData.username.length >= 6 &&
        formData.email.includes('@') &&
        formData.email.includes('.com')
      ) {
        setSubmitted(true);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='user'>
          <label className='lab'>Username</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleInputChange}
          />
          <span>{formErrors.username}</span>
        </div>
        <div className='email'>
          <label className='lab'>Email</label>
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <span>{formErrors.email}</span>
        </div>
        <button className='' type='submit'>
          Submit
        </button>
      </form>
      {submitted && (
        <div className='Welcome'>
          <p>Bienvenido/a {formData.username}</p>
        </div>
      )}
    </div>
  );
};

export default Formulario;
