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
      <h1>{country.name}</h1>
      <img src={country.flag} alt={`${country.name} flag`} />
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default FlagDetails;
