import React from "react";
import "./Butoons.css"

// import { BrowserRouter,Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

function Buttons(){

  const nevigate=useNavigate();
function Add_hotel_nevi(){
  nevigate("/addhotel");

}

    return (
        <>
            <div className="Main-btn">
<div className="filters">
<h1>Filters</h1>
<div className="dropdown">
{/* <button className="btn1">filter by DAte</button>  */}
<button className="dropbtn">filter by Type</button> 
<div class="dropdown-content">
    <a href="#">Type A</a>
    <a href="#">Type B</a>
    <a href="#">Type C</a>
  </div>
</div>


<div className="dropdown">
{/* <button className="btn1">filter by DAte</button>  */}
<button className="dropbtn">Filter by No.</button> 
<div class="dropdown-content">
    <a href="#">Room No 1</a>
    <a href="#">Room No 2</a>
    <a href="#">Room No 3</a>
    <a href="#">Room No 4</a>
    <a href="#">Room No 5</a>
  </div>
</div>

<input  className= "btn1" type="date" id="birthday" name="birthday"></input>


                 {/* <button className="btn2">
                   filter by  Tyepe
                 </button> 
                 <button className="btn2">
                   filter room no 
                 </button>  */}
</div>
<div className="operations">

<h1>Operations</h1>
                 <button className="btn1" onClick={Add_hotel_nevi}>
                    ADD hotel
                 </button> 
                 <button className="btn2">
                    Cancel
                 </button> 
                 <button className="btn3">
                    UPdate
                 </button> 
                 <button className="btn4">
                    Delete
                 </button> 

                 <button className="btn5">Availble</button>
                 <button className="btn5">View boooked page</button>

                 </div>

            </div>
        </>
    )
}
export default Buttons;