import { useState, useEffect } from "react";
import { getProducts } from "../../assets/data/products";

export const Card = () => {
  return (
    <div>
      {getProducts.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
