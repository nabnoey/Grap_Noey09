import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Update = () => {
  //Get ID from URL
  const { id } = useParams();
  const [restaurant, setRestaurants] = useState({
    type: "",
    title: "",
    img: "",
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurant, [name]: value });
  };

  //2.Gett Restaurant By I

  useEffect(() => {
    fetch("http://localhost:3000/restaurants/" + id)
      .then((res) => {
        //convert to Json
        console.log(res);
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants/" + id, {
        method: "PUT",
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
    <div className="top-5">
      <div>
        <form className="flex flex-col justify-center items-center gap-6 p-6 bg-white 	shadow-lg shadow-fuchsia-200 rounded-md  relative top-25 w-full max-w-md mx-auto  ">
          <h2 className="text-xl font-bold text-black">แก้ไขข้อมูล</h2>

          <div className="w-full ">
            <label className="block mb-1">title</label>
            <input
              type="text"
              value={restaurant.title}
              className="input input-primary w-full bg-blue-100 text-black"
              onChange={handleChange}
              name="title"
            />
          </div>

          <div className="w-full">
            <label className="block mb-1">Type: </label>
            <input
              type="text"
              className="input w-full bg-blue-100 text-black"
              value={restaurant.type}
              list="browsers"
              onChange={handleChange}
              name="type"
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
              className="input w-full bg-blue-100 text-black"
              onChange={handleChange}
              name="img"
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
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-400 transition"
              onClick={handleSubmit}
            >
              Update
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

export default Update;
