import axios from "axios";
import React from "react";
import { useState } from "react";

function signUp() {
  const [name, setName] = useState;
  const [email, setEmail] = useState;
  const [password, setPassword] = useState;

  const handeSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={handeSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>email</label>
          <input type="text" name="email" />
          onChange={(e) => setEmail(e.target.value)}
        </div>
        <div>
          <label>password</label>
          <input type="text" name="password" />
          onChange={(e) => setPassword(e.target.value)}
        </div>
        <button type="submit">send</button>
      </form>
    </>
  );
}
module.exports = signUp;
