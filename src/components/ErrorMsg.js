import { Link } from "@reach/router";
import React from "react";

const ErrorMsg = ({ error }) => {
  return (
    <div>
      <h2>{error.status}</h2>
      <h3>{error.msg}</h3>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ErrorMsg;
