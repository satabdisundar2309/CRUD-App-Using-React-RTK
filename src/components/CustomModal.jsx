import React from 'react'
import { useSelector } from "react-redux";
import "./CustomModal.css";
function CustomModal({id, showPopUp, setShowPopUp}) {
    const allusers = useSelector((state) => state.xyz.users);
    const singleUser = allusers.filter((user)=>{
        return user.id === id;
    })
  return (
    <>
        <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() =>{setShowPopUp(false)}}>Close</button>
        <h2>{singleUser[0].name}</h2>
        <h3>{singleUser[0].email}</h3>
        <h4>{singleUser[0].age}</h4>
        <p>{singleUser[0].gender}</p>
      </div>
    </div>
    </>
  )
}

export default CustomModal