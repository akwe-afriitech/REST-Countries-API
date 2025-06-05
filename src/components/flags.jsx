import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import "../App.css";
import Header from "./header.jsx";

const FlagDetails = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };
  const { name } = useParams();
  const country = data.find((country) => country.name === name);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className={isLightMode ? "lightmode" : "darkmode"}>
      <header>
        <Header isLightMode={isLightMode} toggleMode={toggleMode} />
      </header>
      <div className="flag-body">
        <div>
          <div className="back-button">
            <button
              onClick={() => window.history.back()}
              className="back-button"
            >
              <i className="fas fa-arrow-left"></i> Back
            </button>
          </div>
          <div className="flag-gen space">
            <div className="imgdiv">
              <img src={country.flag} alt={`${country.name} flag`} />
            </div>
            <div className="flag-details">
              <h1>{country.name}</h1>
              <div className="flag-gen">
                <div>
                  <p>
                    <strong>Native Name:</strong> {country.nativeName}
                  </p>
                  <p>
                    <strong>Population:</strong> {country.population}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong> {country.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Top Level Domain:</strong>{" "}
                    {country.topLevelDomain.join(", ")}
                  </p>
                  <p>
                    <strong>Currencies:</strong>{" "}
                    {country.currencies
                      .map((currency) => currency.name)
                      .join(", ")}
                  </p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {country.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </p>
                </div>
              </div>
              <div className="border-countries">
                <strong>Border Countries: </strong>
                {country.borders && country.borders.length > 0 ? (
                  <ul>
                    {country.borders.map((border) => (
                      <li key={border}>{border}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No border countries</p>
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FlagDetails;
