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
    miasto: ""
  });

  const [submittedData, setSubmittedData] = useState<FormData[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedData(prev => [...prev, formData]);
    setFormData({ imie: "", nazwisko: "", ulica: "", miasto: "" });
  };

  return (
    <div className="layout">

      <div className="top-bar">
        REACT
      </div>

      <div className="center-all">

        <h2>📋 Formularz danych osobowych</h2>

        <form onSubmit={handleSubmit}>

          <img src={image} className="form-banner" />

          <label>Imię:</label>
          <input name="imie" value={formData.imie} onChange={handleChange} />

          <label>Nazwisko:</label>
          <input name="nazwisko" value={formData.nazwisko} onChange={handleChange} />

          <label>Ulica:</label>
          <input name="ulica" value={formData.ulica} onChange={handleChange} />

          <label>Miasto:</label>
          <input name="miasto" value={formData.miasto} onChange={handleChange} />

          <button type="submit">Dodaj</button>

        </form>

        <div className="table-box">
          <h2>📑 Dane</h2>

          {submittedData.length === 0 ? (
            <p>Brak danych.</p>
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
                {submittedData.map((e, i) => (
                  <tr key={i}>
                    <td>{e.imie}</td>
                    <td>{e.nazwisko}</td>
                    <td>{e.ulica}</td>
                    <td>{e.miasto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>

      <div className="footer">
        2025
      </div>

    </div>
  );
}

export default App;
