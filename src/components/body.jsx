import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import data from "../data.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./header.jsx";

const Body = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const navigate = useNavigate();

  const handleFlagClick = (countryName) => {
    navigate(`/flag/${countryName}`);
  };

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className={isLightMode ? "lightmode" : "darkmode"}>
      <header>
        <Header isLightMode={isLightMode} toggleMode={toggleMode} />
      </header>
      <div className="nested-container">
        <div className="filter-div">
          <form className="search-form">
            <input
              type="text"
              className="search-input size"
              placeholder="🔍 Search for a country.."
            />
          </form>
          <form className="filter-form">
            <select className="filter-select size" defaultValue="">
              <option value="" disabled>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </div>
        <div className="nested-div2">
          <div>
            <div className="country-list">
              {data.map((country, index) => (
                <div key={index} onClick={() => handleFlagClick(country.name)}>
                  <div className="country-card">
                    <div className="imgdiv">
                      <img
                        src={country.flag}
                        alt="Country Flag"
                        className="img"
                      />
                    </div>
                    <div className="country-info">
                      <h2>Country Name: {country.name}</h2>
                      <p>Population: {country.population}</p>
                      <p>Region: {country.region}</p>
                      <p>Capital: {country.capital}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Body;
