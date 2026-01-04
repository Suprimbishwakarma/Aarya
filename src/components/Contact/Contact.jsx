import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "e690f697-3836-4870-b868-3e48f8d40984");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message Delivered Successfully!");
      event.target.reset();
    } else {
      setResult("Error!");
    }
  };
  return (
    <div className="contact-block">
      <div className="contact-title">
        Contact (<span id="inputs"> name, email, message</span> ){" "}
        <span>{"{"}</span>
      </div>
      <div className="contact-body-main">
        <div className="contact-section">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <p className="forward">I am looking forward to hearing from you.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoIosMail className="icons" />
              <span>suprimbishwakarma2002@gmail.com</span>
            </div>
            <div className="contact-detail">
              <FaPhoneAlt className="icons" />
              <span>+977-9765960657</span>
            </div>
            <div className="contact-detail">
              <FaLocationDot className="icons" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
        <form className="form-section" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <div className="result">
            <button type="submit" className="form-submit">
              Submit
            </button>
            <span>{result}</span>
          </div>
        </form>
      </div>
      <div className="contact-title-closing">
        <span>{"}"}</span>
      </div>
    </div>
  );
};

export default Contact;
