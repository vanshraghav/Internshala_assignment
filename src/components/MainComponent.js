import React, { useState, useEffect } from "react";
import { getBeers } from "../api";
import BeerList from "./BeerList";
import "./MainComponent.css";

const MainComponent = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBeers();
      setBeers(data);
    };

    fetchData();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      <input
        type="text"
        placeholder="Search beers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <BeerList beers={filteredBeers} />
    </div>
  );
};

export default MainComponent;
