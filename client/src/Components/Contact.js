import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const navigate = useNavigate();
  const userContact = async () => {
    try {
      const response = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (response.status !== 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (e) {
      console.log("eroor " + e);
      navigate("/login");
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // send data to backend

  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await response.json();

    if (!data) {
      window.alert("message not sent");
    } else {
      window.alert("Message Sent");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div>
        <div className="card-group col-lg-10 offset-lg-1 d-flex justify-content-between">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Phone</h5>
              <p className="card-text">+912048957</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">example@example.com</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">address</h5>
              <p className="card-text">kolkata</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="forms">Contact Us</h2>
        <form className="forms" id="contact-form" method="POST">
          <div className="mb-3">
            <label for="Inputname" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputs}
            />
          </div>
          <div className="mb-3">
            <label for="InputEmail" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputs}
            />
          </div>

          <div className="mb-3">
            <label for="InputNumber" className="form-label">
              Your Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleInputs}
            />
          </div>

          <div className="mb-3">
            <label for="InputMessage" className="form-label">
              Your Message
            </label>
            <textarea
              placeholder="Message"
              cols="30"
              rows="6"
              className="form-control"
              id="message"
              name="message"
              value={userData.message}
              onChange={handleInputs}
            />
          </div>
          <div>
            <input
              type="submit"
              name="sendMessage"
              id="sendMessage"
              className="form-submit"
              value="Send Your Message"
              onClick={contactForm}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
