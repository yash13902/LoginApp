import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <div className="card-group col-lg-10 offset-lg-1 d-flex justify-content-between">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Phone</h5>
              <p className="card-text">8583881309</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">jasaniyash13@gmail.com</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">phone</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="forms">Contact Us</h2>
        <form className="forms" id="contact-form">
          <div className="mb-3">
            <label for="Inputname" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="Inputname" />
          </div>
          <div className="mb-3">
            <label for="InputEmail" className="form-label">
              Your Email
            </label>
            <input type="email" className="form-control" id="InputEmail" />
          </div>

          <div className="mb-3">
            <label for="InputNumber" className="form-label">
              Your Phone Number
            </label>
            <input type="number" className="form-control" id="InputNumber" />
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
              id="InputMessage"
            />
          </div>
          <div>
            <input
              type="submit"
              name="sendMessage"
              id="sendMessage"
              className="form-submit"
              value="Send Your Message"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
