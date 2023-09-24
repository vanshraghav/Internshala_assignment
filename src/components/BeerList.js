import React from "react";
import "./BeerList.css";
import BeerCard from "./BeerCard";

const BeerList = ({ beers }) => {
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default BeerList;
