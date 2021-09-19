import React from "react";
import data from "./data.js";


const Grid = ({ type }) => {
  return (
    <div className="img-container">
      {data[type].map((item, index) => (
        <div key={index} className="img-item">
          <img className="capas" src={item.url} alt={item.name}></img>
        </div>
      ))}
    </div>
  );
};

export default Grid;
