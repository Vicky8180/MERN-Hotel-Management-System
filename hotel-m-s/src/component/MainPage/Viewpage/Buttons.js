import React from "react";
import "./Butoons.css"
import{Link} from "react-router-dom"

// import { BrowserRouter,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Buttons() {

  const nevigate = useNavigate();
  function Add_hotel_nevi() {
    nevigate("/addhotel");
}

function Update(){
  nevigate("/bookedroom")
}
function Availble_room(){
  nevigate("/availbleroom")
}
function Booked_room(){
  nevigate("/bookedroom")
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
            <Link to="/fpfr">Type A</Link>

            <Link to="/fpfr">Type B</Link>
            <Link to="/fpfr">Type C</Link>
            </div>
          </div>


          <div className="dropdown">
            {/* <button className="btn1">filter by DAte</button>  */}
            <button className="dropbtn">Filter by No.</button>
            <div class="dropdown-content">
            <Link to="/fpfr">Room No-1</Link>
            <Link to="/fpfr">Room No-2</Link>
            <Link to="/fpfr">Room No-3</Link>
            <Link to="/fpfr">Room No-4</Link>
            <Link to="/fpfr">Room No-5</Link>
            </div>
          </div>

          <input className="btn1" type="date" id="birthday" name="birthday"></input>


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
          <button className="btn2" onClick={Update}>
            Cancel
          </button>
          <button className="btn3" onClick={Update}>
            UPdate
          </button>
          <button className="btn4" onClick={Update}>
            Delete
          </button>

          <button className="btn5"  onClick={Availble_room}>Availble</button>
          <button className="btn5" onClick={Booked_room}>View boooked page</button>

        </div>

      </div>
    </>
  )
}
export default Buttons;