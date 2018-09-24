import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={country} />
    <figcaption>
       <h1>{country}</h1>
       <p>{destination}</p>
       <p>{distance}</p>
    </figcaption>
  </figure>
);

export default Travel;