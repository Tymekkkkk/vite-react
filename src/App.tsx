import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
import image from "./assets/pobrane.png";

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
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedData(prev => [...prev, formData]);
    setFormData({ imie: "", nazwisko: "", ulica: "", miasto: "" });
  };

  return (
    <div className="layout">

      {/* GÓRNY PASEK */}
      <div className="top-bar">REACT</div>

      {/* ŚRODEK */}
      <div className="center-container">

        <h2 className="title">📋 Formularz danych osobowych</h2>

        <form onSubmit={handleSubmit} className="form-box">

          <img src={image} alt="banner" className="form-banner" />

          <label>Imię:</label>
          <input name="imie" value={formData.imie} onChange={handleChange} required />

          <label>Nazwisko:</label>
          <input name="nazwisko" value={formData.nazwisko} onChange={handleChange} required />

          <label>Ulica:</label>
          <input name="ulica" value={formData.ulica} onChange={handleChange} required />

          <label>Miasto:</label>
          <input name="miasto" value={formData.miasto} onChange={handleChange} required />

          <button type="submit">➕ Dodaj</button>
        </form>

        <div className="table-wrapper">
          <h2>📑 Dane</h2>

          {submittedData.length === 0 ? (
            <p>Brak danych – wypełnij formularz powyżej.</p>
          ) : (
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
                {submittedData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.imie}</td>
                    <td>{item.nazwisko}</td>
                    <td>{item.ulica}</td>
                    <td>{item.miasto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>

      {/* DOLNY PASEK */}
      <div className="footer">2025</div>
    </div>
  );
}

export default App;
