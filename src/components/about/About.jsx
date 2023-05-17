import React, { useContext } from "react";
import "./about.css";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="about">
      <div className="about-left">
        <div
          className="about-card bg"
          style={{
            background: theme.state.darkMode ? "#FF5732" : "#4B0150",
          }}
        ></div>
        <div className="about-card">
          <img className="about-img" src="/img/image.jpeg" alt="" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          I am Debesh Mohapatra, currently pursuing BTech from VSSUT, Burla from
          the department of CSE. As a web developer, I specialize in designing
          and building interactive and engaging websites. I have a deep
          understanding of web technologies, front-end frameworks, and back-end
          development, which allows me to create robust and user-friendly online
          experiences. With a strong foundation in web development principles
          and a continuous passion for staying up-to-date with the latest
          industry trends, I can bring your ideas to life and deliver
          high-quality websites that meet your requirements. From crafting
          visually appealing interfaces to implementing robust functionality, I
          am committed to creating exceptional web experiences for your users.
        </p>
        <p className="about-desc">
        Enclosed herewith are the certificates that I have diligently acquired from a multitude of online platforms.
        </p>
        <div className="about-award">
          <img src="/img/aws.jpg" alt="" className="about-award-img" />
          <div className="about-award-text">
            <h4 className="about-award-title">AWS Certified</h4>
            <p className="about-award-desc">
              AI ML Virtual Internship Certificate
            </p>
          </div>
        </div>
        <div className="about-award">
          <img src="/img/paloalto.jpg" alt="" className="about-award-img" />
          <div className="about-award-text">
            <h4 className="about-award-title">Palo Alto Certified</h4>
            <p className="about-award-desc">
              Cybersecurity Virtual Internship Certificate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
