import React from "react";
import Cards from "./Cards";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex">
      <div className=" flex flex-wrap justify-center gap-4">
        {restaurants &&
          restaurants.map((restaurants) => {
            return (
              <Cards
                id={restaurants.id}
                title={restaurants.titel}
                type={restaurants.type}
                img={restaurants.img}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Restaurants;
