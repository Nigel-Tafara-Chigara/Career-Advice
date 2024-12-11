import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Our Career Advice Platform</h1>
      <p style={styles.description}>
        This platform serves as an informative resource for college students
        pursuing their respective programs. It aims to provide simple but highly
        useful advice tailored to the programs they are currently undertaking.
      </p>
      <h2 style={styles.subHeader}>Select Your Account Type to Get Started</h2>
      <div style={styles.linkContainer}>
        <Link to="/logi" style={styles.link}>
          User Account
        </Link>
        <Link to="/log" style={styles.link}>
          Admin Account
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    color: "#343a40",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    fontWeight: "bold",
    color: "#007bff",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    lineHeight: "1.6",
    maxWidth: "600px",
  },
  subHeader: {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    color: "#495057",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  link: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  linkHover: {
    backgroundColor: "#0056b3",
  },
};

export default LandingPage;
