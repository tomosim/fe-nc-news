import React, { useState } from "react";
import { navigate } from "@reach/router";

import styles from "../styles/forms.module.css";
import { fetchUsers } from "../api";

import ErrorMsg from "../components/ErrorMsg";

const Login = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const findUser = (users, username) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUsers().then((users) => {
      if (findUser(users, username) === true) {
        setLoggedInUser(username);
        navigate("/");
      } else {
        setError({ status: 404, msg: "Username not found" });
      }
    });
  };

  return (
    <>
      <h1 className="header">Log In</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error !== null && <ErrorMsg error={error} />}
        <label>
          Username:{" "}
          <input type="text" onChange={handleChange} value={username}></input>
        </label>
        <button className={styles.button}>Log In</button>
        <p className={styles.hint}>
          <i>psst! Try "jessjelly"</i>
        </p>
      </form>
    </>
  );
};

export default Login;
