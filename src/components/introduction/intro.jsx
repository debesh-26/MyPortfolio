import React, { useContext } from "react";
import "./intro.css";
import { ThemeContext } from "../../context";
const Intro = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="intro">
      <div className="introL">
        <div className="intro-wrapper">
          <h2 className="introDesc">Hello,My name is</h2>
          <h1 className="intro-name">Debesh Mohapatra</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div
                className="intro-title-item"
                style={{
                  color: theme.state.darkMode ? "#FF5732" : "#4B0150",
                }}
              >
                Web Developer
              </div>
              <div
                className="intro-title-item"
                style={{
                  color: theme.state.darkMode ? "#FF5732" : "#4B0150",
                }}
              >
                MERN stack Developer
              </div>
              <div
                className="intro-title-item"
                style={{
                  color: theme.state.darkMode ? "#FF5732" : "#4B0150",
                }}
              >
                Programmer
              </div>
              <div
                className="intro-title-item"
                style={{
                  color: theme.state.darkMode ? "#FF5732" : "#4B0150",
                }}
              >
                Freelancer
              </div>
              <div
                className="intro-title-item"
                style={{
                  color: theme.state.darkMode ? "#FF5732" : "#4B0150",
                }}
              >
                UI/UX Designer
              </div>
            </div>
          </div>
          <p className="intro-desc">
            I develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className="introR">
        <div className="intro-img-wrapper">
          <div
            className="intro-bg"
            style={{
              background: theme.state.darkMode ? "#FF5732" : "#4B0150",
            }}
          ></div>
          <img
            src="/img/image.jpeg"
            alt="Debesh Mohapatra"
            className="intro-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
