import React, { useState } from "react";
import NavBar from "../Component/Navbar";

const Add = () => {
  const [restaurant, setRestaurants] = useState({
    type: "",
    title: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurant, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("แก๋วมากน้อง!!!");
        setRestaurants({
          type: "",
          title: "",
          img: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="top-50">
      <NavBar />
      <div>
        <form className="flex flex-col justify-center items-center gap-6 p-6 bg-white rounded-md  relative top-10 w-full max-w-md mx-auto">
          <h2 className="text-xl font-bold">เพิ่มเลยจ้า</h2>

          <div className="w-full">
            <label className="block mb-1">title</label>
            <input
              type="text"
              value={restaurant.title}
              className="input input-primary w-full"
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="block mb-1">Type: </label>
            <input
              type="text"
              className="input w-full"
              value={restaurant.type}
              list="browsers"
              name="type"
              onChange={handleChange}
            />
            <datalist id="browsers">
              <option value="ชานมไข่มุก" />
              <option value="กาแฟ" />
              <option value="น้ำอัดลม" />
            </datalist>
          </div>

          <div className="w-full">
            <label className="block mb-1">img</label>
            <input
              type="url"
              value={restaurant.img}
              className="input input-primary w-full"
              name="img"
              onChange={handleChange}
            />
          </div>
          {restaurant.img && (
            <div className="flex items-center gap-2">
              <img className="h-32" src={restaurant.img} />
            </div>
          )}

          <div className="flex justify-between w-full mt-4 gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={handleSubmit}
            >
              Add
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
