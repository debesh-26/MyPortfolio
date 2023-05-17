import React, { useContext } from "react";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import "./toggle.css";
import { ThemeContext } from "../../context";
const Toggle = () => {
  const Theme = useContext(ThemeContext);


  const handleToggle = () => {
    Theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t" onClick={handleToggle}>
      <BsSunFill className="toggle" style={{ color: Theme.state.darkMode ? "black" : "white" }} />
      <BsFillMoonFill className="toggle" style={{ color: Theme.state.darkMode ? "white" : "black" }} />
      <div
        className="ball"
        style={{ right: Theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
