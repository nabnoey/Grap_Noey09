import React, { useState } from "react";


const Cards = (props) => {

  const [showDelete, setShowDelete] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");

  const handleDelete = async (id) => {
    setIdToDelete(id);
    setShowDelete(true);

  }

    const confirmDelete = async () => {

      if (!idToDelete){
        console.log("No ID to delete was ser. ");
        setShowDelete(false);
        return;
      }
    

    try {
      const response = await fetch("http://localhost:3000/restaurants/" + idToDelete, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log (`รายการ : ${idToDelete} ถูกลบแล้ว`);

      }else{
        console.error("Failed to delete item:", response.status);
        alert("เกิดข้อผิดพลาดในการลบข้อมูล");
      }

    } catch (error) {
      console.log("เกิดข้อผิดพลาด: ", error);

    }finally{
      setShowDelete(false);
      setIdToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDelete(false);
    setIdToDelete(null);
  }



  return (
    <div className="card bg-base-100 w-96 shadow-sm bg-pink-200 text-black">
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
          <button onClick={() => handleDelete(props.id)} className="btn btn-soft btn-error">Delete</button>
          {/* <div className="badge badge-outline">Edit</div> */}
          <a href={"/update/" + props.id} className="btn btn-soft btn-warning">
            Edit
          </a>
        </div>
      </div>


      {/* ใช้ Component Daisy */}
{showDelete && (
        <dialog id="delete_confirmation_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-white">ยืนยันการลบข้อมูล</h3>
            <p className="py-4 text-white">
              คุณแน่ใจหรือไม่ว่าต้องการลบรายการ "{props.title}"?
            </p>
            <div className="modal-action">
              <button className="btn btn-error" onClick={confirmDelete}>
                ยืนยันการลบ
              </button>
              <button className="btn btn-white" onClick={cancelDelete}>
                ยกเลิก
              </button>
            </div>
          </div>
          {/* ส่วนนี้ทำให้คลิกนอก Modal แล้วปิดได้ */}
          <form method="dialog" className="modal-backdrop">
            <button onClick={cancelDelete}>close</button>
          </form>
        </dialog>
      )}

    </div>
  );
};

export default Cards;
