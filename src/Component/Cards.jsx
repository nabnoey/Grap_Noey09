import React from "react";
import { Link } from "react-router";

const Cards = (props) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/restaurants/" + id, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("ยืนยันที่จะลบข้อมูล!");
      }
    } catch (error) {
      console.log("เกิดข้อผิดพลาด: ", error);
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={props.img} alt="Shoes" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {props.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{props.type}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleDelete(props.id)}>Delete</button>
          {/* <div className="badge badge-outline">Edit</div> */}
          <a href={"/update/" + props.id} className="btn btn-soft btn-warning">
            Edit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
