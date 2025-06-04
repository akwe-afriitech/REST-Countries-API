import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const FlagDetails = () => {
  const { name } = useParams();
  const country = data.find((country) => country.name === name);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <div className="back-button">
        <button onClick={() => window.history.back()} className="back-button">
          <i className="fas fa-arrow-left"></i> Back
        </button>   
      </div>
      <div>
        <img src={country.flag} alt={`${country.name} flag`} />
      </div>
      <div>
        <h1>{country.name}</h1>
        <div>
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
              {country.currencies.map((currency) => currency.name).join(", ")}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {country.languages.map((language) => language.name).join(", ")}
            </p>
          </div>
        </div>
        <div>
          <strong>Border Countries:</strong>
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
  );
};

export default FlagDetails;
