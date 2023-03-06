import React, { createElement, useState } from "react";
import "./Addhotel.css"
import { useNavigate } from "react-router-dom"
// import {useNavigate} from "react-router-dom"
import Navbar from "../Navbar/Navbar";


function Addhotel() {
  const nevigate = useNavigate();
  const [credentials, setCredentials] = useState({ room: "", roomNo: 88, roomtype: "Type", roomprice: 100, roomstatus: "Status", imgurl: "Imgurl" })

  const hitting_endpoint = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/Database1forRoom/add_hotel", {
      method: "post",
      headers: {

        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        room: credentials.room,
        roomNo: credentials.roomNo,
        roomtype: credentials.roomtype,
        roomprice: credentials.roomprice,
        roomstatus: credentials.roomstatus,
        imgurl: credentials.imgurl
      })
    })

    // console.log(credentials);
    const json=await response.json();
    console.log(json);
    alert("Hotel add scucessfully")
    nevigate("/fpfr");

    // }


  
  }
  function changer(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    // console.log(credentials);
  }
  


  return <>
    <Navbar />
    <div className="main-1">
      <h1>Add Hotels to Your Menu</h1>
      <form>
        <div className="input_taking">
          <input className="taker" type="text" name='room' placeholder="Room" value={credentials.room} onChange={changer} />


          <input className="taker" type="number" name='roomNo' value={credentials.roomNo} onChange={changer} />
          <input className="taker" type="text" name='roomtype' value={credentials.roomtype} onChange={changer} />
          <input className="taker" type="number" name='roomprice' value={credentials.roomprice} onChange={changer} />

          <input className="taker" type="number" name='roomstatus' value={credentials.roomstatus} onChange={changer} />
          <input className="taker" type="text" name='imgurl' value={credentials.imgurl} onChange={changer} />

        </div>
      </form>
      <button className="Add_Hotel" onClick={hitting_endpoint} >Add Hotels</button>
    </div>
  </>
}
export default Addhotel;
