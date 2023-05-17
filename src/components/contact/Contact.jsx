import React, { useRef, useState, useContext } from "react";
import "./contact.css";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const [Done, setDone] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k1tm0yx",
        "template_sgivwu9",
        formRef.current,
        "AYgRf5Cosz1QcSIw3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div
        className="c-bg"
        style={{
          background: theme.state.darkMode ? "#FF5732" : "#4B0150",
        }}
      ></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1
            className="c-title"
            style={{
              color: theme.state.darkMode ? "#FF5732" : "#4B0150",
            }}
          >
            Let's discuss your project
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <IoCall className="c-icon"  />
              +91-7064074291
            </div>
            <div className="c-info-item">
              <MdEmail className="c-icon"  />
              dmohapatra291@gmail.com
            </div>
            <div className="c-info-item">
              <ImLocation2 className="c-icon"  />
              Balasore,Odisha,India
            </div>
            <div className="c-info-item">
              <BsGithub className="c-icon"  />
              https://github.com/debesh-26
            </div>
            <div className="c-info-item">
              <BsLinkedin className="c-icon" />
              https://www.linkedin.com/in/debesh-mohapatra-650070205/
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b
              style={{
                color: theme.state.darkMode ? "#FF5732" : "#4B0150",
              }}
            >
              Want to get in touch?{" "}
            </b>{" "}
            <span
              style={{
                color: theme.state.darkMode ? "white" : "black",
              }}
            >
              I'd love to hear from you. Here's how you can reach me...
            </span>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button
              className="c-button"
              style={{
                backgroundColor: theme.state.darkMode ? "#FF5732" : "#4B0150",
              }}
            >
              Submit
            </button>
            {Done && (
              <div
                className="response"
                style={{
                  color: theme.state.darkMode ? "#FF5732" : "#4B0150",
                }}
              >
                Thank you...I will contact you soon
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
