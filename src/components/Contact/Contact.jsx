import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiCrown } from "react-icons/gi";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-title">
        <p>Get in touch</p>
        <GiCrown className="logo" />
      </div>
      <div className="contact-body">
        <div className="contact-section">
          <p>Let's talk</p>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime
          </p>
          <div>
            <IoIosMail />
            <p>suprimbishwakarma2002@gmail.com</p>
          </div>
          <div>
            <FaPhoneAlt />
            <p>+977-9765960657</p>
          </div>
          <div>
            <FaLocationDot />
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
        <div className="form-section">
          <form>
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
