import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Hello() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
      <p style={styles.linkText}>
        Already have an account?{" "}
        <Link to="/log" style={styles.link}>
          Login to admin
        </Link>
        <div>
          <Link to="/logi" style={styles.link}>
            Login to user
          </Link>
        </div>
      </p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    maxWidth: "400px",
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
  inputFocus: {
    borderColor: "#007bff",
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

export default Hello;
