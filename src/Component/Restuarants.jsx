import React from "react";
import Cards from "./Cards";

const Restuarants = () => {
  return (
    <div className="flex">
      <div className=" flex flex-wrap justify-center gap-4">
        <Cards
          title="Raku Tea 楽茶"
          type="ชาไข่มุก"
          img="https://food-cms.grab.com/compressed_webp/merchants/3-C33KAN31RY2DFE/hero/ca5420a9-f667-4e60-a17b-2f04fbd05cd6__store_cover__2023__03__25__08__28__32.webp"
        ></Cards>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Restuarants;
