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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    <div className=\"App\"}>
      <header>
        <img src={image} alt="logo" style={{ width: "120px" }} />
        <h3>📋 Formularz danych osobowych</h3>
      </header>

      <section className="form-section">
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
          <button type="submit">➕ Dodaj</button>
        </form>
      </section>

      <section className=\"table-section\">
        <img src={image} alt="photo" style={{ width: "200px", display: "block", margin: "10px auto" }} />
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
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.imie}</td>
                  <td>{data.nazwisko}</td>
                  <td>{data.ulica}</td>
                  <td>{data.miasto}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      ❌ Usuń
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default App;
