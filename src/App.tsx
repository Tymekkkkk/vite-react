import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";

interface FormData {
  imie: string;
  nazwisko: string;
  ulica: string;
  miasto: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    imie: "",
    nazwisko: "",
    ulica: "",
    miasto: "",
  });

  const [submittedData, setSubmittedData] = useState<FormData[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ imie: "", nazwisko: "", ulica: "", miasto: "" });
  };

  const handleDelete = (index: number) => {
    const newData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(newData);
  };

  return (
    <div className="App">
      <h1>📋 Formularz danych osobowych</h1>

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
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.imie}</td>
              <td>{data.nazwisko}</td>
              <td>{data.ulica}</td>
              <td>{data.miasto}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Usuń</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
