import React from "react";
import "../App.css";
import data from "../data.json";

const Body = () => {
  return (
    <div className="body-container">
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
            <ul>
              {data.map((country, index) => (
                <li key={index}>
                  <div className="country-card">
                    <img src={country.flag} alt="Country Flag" />
                    <div className="country-info">
                      <h2>Country Name: {country.name} </h2>
                      <p>Population: {country.population}</p>
                      <p>Region: {country.region} </p>
                      <p>Capital: {country.capital}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Body;
