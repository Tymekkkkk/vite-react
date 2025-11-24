import { useState, ChangeEvent, FormEvent } from 'react';

// Definicja typu dla danych w formularzu
interface FormData {
  imie: string;
  nazwisko: string;
  ulica: string;
  miasto: string;
}

const Form = () => {
  // Stan dla formularza (Typowanie za pomocą interfejsu FormData)
  const [formData, setFormData] = useState<FormData>({
    imie: '',
    nazwisko: '',
    ulica: '',
    miasto: ''
  });

  // Stan dla przesłanych danych
  const [submittedData, setSubmittedData] = useState<FormData[]>([]);

  // Obsługuje zmiany w formularzu
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Obsługuje przesyłanie formularza
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Dodajemy dane do tabeli
    setSubmittedData([...submittedData, formData]);
    // Resetujemy formularz
    setFormData({ imie: '', nazwisko: '', ulica: '', miasto: '' });
  };

  return (
    <div>
      <h1>Formularz</h1>
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
