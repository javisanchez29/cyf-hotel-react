import React from "react";

const TouristInfoCards = ({ pictures, country, link }) => {
  return (
    <div className="card bg-info text-white border-light">
      <img src={pictures} className="card-img-top" alt="#" />
      <h3 className="card-tittle nombre-ciudad">{country}</h3>
      <div className="tarjeta-enlace">
        <a
          href={link}
          className="btn btn-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitanos Ya!!
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
