import React, { useState } from "react";
import { navigate } from "@reach/router";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input type="text" onChange={handleChange} value={username}></input>
        </label>
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
