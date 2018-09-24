import React from "react";

import Travel from "./Travel";
// src/Travels.js
const travels = [
  {
    destination: "Grand Canyon",
    country: "Arizona, USA",
    photo: "https://www.google.com/maps/about/images/treks/canyon6-carousel.jpg",
    distance: "666km",  
  },
  {
    destination: "Tower Bridge",
    country: "England",
    photo: "https://www.towerbridge.org.uk/media/assets/image/thumbs/Guide-Book-Cover-22.jpg.952x602_q100.jpg",
    distance: "777km",
  },
  {
    destination: "Eiffel Tower",
    country: "Paris",
    photo: "https://sete.toureiffel.paris/themes/custom/tour_eiffel/img/societe-d-exploitation-de-la-tour-eiffel-accueil.jpg",
    distance: "5km",
  },
  {
    destination: "Taj Mahal",
    country: "Inde",
    photo: "https://www.holidayguru.fr/wp-content/uploads/2016/12/Taj-Mahal-Indien-Palast1-707x471.jpg",
    distance: "444km",
  },
  {
    destination: "Broadway",
    country: "New York, USA",
    photo: "https://previews.123rf.com/images/masterlu/masterlu1204/masterlu120400001/13095699-new-york-city-march-25-times-square-featured-with-broadway-theaters-and-animated-led-signs-is-a-symb.jpg",
    distance: "236km",
  }
];

const Travels = () => (
  <div>
    {travels.map((travel, index) => (
      <Travel key={index} {...travel} />
    ))}

  </div>
);

export default Travels;