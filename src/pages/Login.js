import React, { useState } from "react";
import { navigate } from "@reach/router";

import styles from '../styles/forms.module.css'

const Login = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedInUser(username);
    navigate("/");
  };

  return (
    <>
      <h1 className="header">Log In</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input type="text" onChange={handleChange} value={username}></input>
        </label>
        <button className={styles.button} >Log In</button>
        <p className={styles.hint}><i>psst! Try "jessjelly"</i></p>
      </form>
    </>
  );
};

export default Login;
