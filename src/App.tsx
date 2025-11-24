import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    imie: '',
    nazwisko: '',
    ulica: '',
    miasto: ''
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dodajemy dane z formularza do tabeli
    setSubmittedData([...submittedData, formData]);
    // Resetujemy formularz
    setFormData({ imie: '', nazwisko: '', ulica: '', miasto: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imię:</label>
          <input
            type="text"
            name="imie"
            value={formData.imie}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nazwisko:</label>
          <input
            type="text"
            name="nazwisko"
            value={formData.nazwisko}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ulica:</label>
          <input
            type="text"
            name="ulica"
            value={formData.ulica}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Miasto:</label>
          <input
            type="text"
            name="miasto"
            value={formData.miasto}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Prześlij</button>
      </form>

      <h2>Wprowadzone dane</h2>
      <table>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Ulica</th>
            <th>Miasto</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.imie}</td>
              <td>{data.nazwisko}</td>
              <td>{data.ulica}</td>
              <td>{data.miasto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
