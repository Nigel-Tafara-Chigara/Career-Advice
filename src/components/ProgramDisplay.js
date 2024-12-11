import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProgramDisplay() {
  const [program, setProgram] = useState(""); // To store the search input
  const [advice, setAdvice] = useState([]); // To store the fetched advice
  const [error, setError] = useState(""); // To handle errors

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3001/api/advice", { params: { program } }) // Send query parameter
      .then((response) => {
        setAdvice(response.data); // Update advice state with fetched data
        setError(""); // Clear error if data is fetched successfully
      })
      .catch((err) => {
        console.error(err);
        setAdvice([]); // Clear previous advice
        setError(err.response?.data?.message || "Error fetching advice");
      });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h1>Search Career Advice</h1>
      <form onSubmit={handleSearch}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="program">Program:</label>
          <input
            type="text"
            id="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {advice.length > 0 && (
        <div>
          <h2>Advice for "{program}"</h2>
          <ul>
            {advice.map((item) => (
              <li key={item._id}>
                <strong>Program:</strong> {item.program} <br />
                <strong>Advice:</strong> {item.advice}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link to="/" style={{ color: "green" }}>
        Log Out
      </Link>
    </div>
  );
}

export default ProgramDisplay;
