import React, { useState, useEffect } from "react";
import Restaurants from "../Component/Restaurants";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [FilteredRestaurants, setFileredRestaurants] = useState([]);

  const handleSearch = (keyword) => {
    if (keyword === "") {
      setFileredRestaurants(restaurants);
      return;
    }

    const result = restaurants.filter((restaurant) => {
      return (
        restaurant.title.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.type.toLowerCase().includes(keyword.toLowerCase())
      );
    });

    setFileredRestaurants(result);
  };
  useEffect(() => {
    //call api: getAllRestuarants
    fetch("http://localhost:3000/restaurants")
      .then((res) => {
        //convert to Json
        console.log(res);
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
        setFileredRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 p-5">
          Grap Restuarant
        </h1>
        <div className="mb-5 flex justify-center item-center">
          <label className="input flex item-center gap-2 w-2xl text-black bg-blue-300">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
          
              name="keyword"
              onChange={(e) => handleSearch(e.target.value)}
              required
              placeholder="Search"
            
            />
          </label>
        </div>
        {/* <div>
          <Restaurants />
        </div> */}
      </div>
      <Restaurants restaurants={FilteredRestaurants} />
    </div>
  );
};

export default Home;
