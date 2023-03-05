import React from "react";
import "./Addhotel.css"
// import {useNavigate} from "react-router-dom"
import Navbar from "../Navbar/Navbar";


function Addhotel() {


    return <>
       <Navbar/>
    <div  className="main-1">
    <h1   
>Add Hotels to Your Menu</h1>
        <form>
    <div className="input_taking">
    <input className="taker" type="text" name="fname" value="Hotel Name"/>
    <input  className="taker"  type="text" name="fname" value="Room No"/>
    <input  className="taker" type="text" name="fname" value="Type Hotel"/>
    <input   className="taker" type="text" name="fname" value="Price"/>

    </div> 
      </form>
   <button  className="Add_Hotel" >Add Hotels</button>
      </div>
    </>
}
export default Addhotel;
