import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>404</h1>
      <NavLink to="/">Back to Home Page</NavLink>
    </>
  );
};

export default ErrorPage;
