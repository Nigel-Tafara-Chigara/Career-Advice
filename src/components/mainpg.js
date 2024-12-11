import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [program, setProgram] = useState("");
  const [advice, setAdvice] = useState("");

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/writeadvice", { program, advice })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Submit Career Advice</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Program</label>
          <input
            type="text"
            name="program"
            placeholder="Enter program name"
            onChange={(e) => setProgram(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Career Advice</label>
          <textarea
            name="advice"
            placeholder="Enter your career advice here"
            rows="5"
            onChange={(e) => setAdvice(e.target.value)}
            style={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>
          Send Note
        </button>
      </form>
      <p style={styles.linkText}>
        <Link to="/" style={styles.link}>
          Log Out
        </Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    resize: "vertical",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  },
  linkText: {
    marginTop: "15px",
    fontSize: "0.9rem",
    color: "#555",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  linkHover: {
    color: "#0056b3",
  },
};

export default Login;
