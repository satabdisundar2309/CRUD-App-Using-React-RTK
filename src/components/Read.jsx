import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, showUser } from "../features/UserDetailsSlice";
import CustomModal from "./CustomModal";

function Read() {
    const navigate = useNavigate();
    const [id, setId]=useState();
    const [showPopUp, setShowPopUp]=useState(false);
    const {users, loading} = useSelector((state)=>{
        return state.xyz
    })
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(showUser()); 
    },[])

    if(loading){
        return (<h2>Loading...</h2>)
    }
  return (
    <div>
    {showPopUp && <CustomModal id={id} showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>}
    <h1>All Users</h1>
      {users && users.map((user, i)=>{
        return <div key={i} className="card w-50 mx-auto my-2">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.gender}</h6>
          <p className="card-text">
            {user.email}
          </p>
          <button className="card-link" onClick={()=>{[setId(user.id), setShowPopUp(true)]}}>
            View
          </button>
          <Link to={`/edit/${user.id}`} className="card-link">
            Edit
          </Link>
          <Link onClick={()=>{
            [dispatch(deleteUser(user.id)),navigate("/read")]
          }} className="card-link">
            Delete
          </Link>
        </div>
      </div>
      })}
    </div>
  );
}

export default Read;
