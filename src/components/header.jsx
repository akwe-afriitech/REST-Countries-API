import React from "react";
import "../App.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Header = ({ isLightMode, toggleMode }) => {
  return (
    <header id="header">
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div>
        <button onClick={toggleMode} className="toggle-button">
          <i className={isLightMode ? "fas fa-moon" : "fas fa-sun"}></i>
          {isLightMode ? " Dark Mode" : " Light Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;