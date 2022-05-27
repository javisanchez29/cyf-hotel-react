import React from "react";
const RestaurantButton = ({ order }) => {
  return (
    <div className="restaurant-button">
      <button onClick={order} className="btn btn-info">
        Add
      </button>
    </div>
  );
};
export default RestaurantButton;
