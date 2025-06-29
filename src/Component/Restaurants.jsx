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
                key={restaurants.id}
                id={restaurants.id}
                title={restaurants.title}
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
