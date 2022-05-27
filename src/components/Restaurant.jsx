import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <h2 className="titulo-menu">Menú</h2>
      <ul className="orders-list">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
