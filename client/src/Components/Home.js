import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const userLogin = async () => {
    try {
      const response = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setUserName(data.name);
      setShow(true);

      if (response.status !== 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (e) {
      console.log("eroor " + e);
    }
  };

  useEffect(() => {
    userLogin();
  }, []);

  return (
    <>
      <div>Welcome</div>
      <div>{userName}</div>
      <div>{show ? "Happy to see you back" : "hey developer"}</div>
    </>
  );
};

export default Home;
