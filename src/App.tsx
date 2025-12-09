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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedData((prev) => [...prev, formData]);
    setFormData({ imie: "", nazwisko: "", ulica: "", miasto: "" });
  };

  const handleDelete = (index: number) => {
    setSubmittedData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="layout">

      {/* GÓRNY PASEK */}
      <header className="top-bar">
        <h1>REACT</h1>
      </header>

      {/* ŚRODEK */}
      <main className="center">

        <h2 className="form-title">📋 Formularz danych osobowych</h2>

        <form onSubmit={handleSubmit} className="form-box">
          <img src={image} alt="banner" className="form-banner" />

          <label>Imię:</label>
          <input type="text" name="imie" value={formData.imie} onChange={handleChange} required />

          <label>Nazwisko:</label>
          <input type="text" name="nazwisko" value={formData.nazwisko} onChange={handleChange} required />

          <label>Ulica:</label>
          <input type="text" name="ulica" value={formData.ulica} onChange={handleChange} required />

          <label>Miasto:</label>
          <input type="text" name="miasto" value={formData.miasto} onChange={handleChange} required />

          <button type="submit" className="add-btn">➕ Dodaj</button>
        </form>

        <section className="table-wrap">
          <h2>📑 Wprowadzone dane</h2>

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
                  <th>Akcje</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((e, index) => (
                  <tr key={index}>
                    <td>{e.imie}</td>
                    <td>{e.nazwisko}</td>
                    <td>{e.ulica}</td>
                    <td>{e.miasto}</td>
                    <td>
                      <button onClick={() => handleDelete(index)} className="delete-btn">
                        ❌ Usuń
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

      </main>

      {/* STOPKA */}
      <footer className="footer">
        <p>2025</p>
      </footer>

    </div>
  );
}

export default App;
