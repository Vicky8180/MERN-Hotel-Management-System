import React from 'react'
import Navbar from '../MainPage/Navbar/Navbar'

export default function BookingPage() {


  
  return (
   <>

<Navbar />
    <div className="main-1">
      <h1>Add Hotels to Your Menu</h1>
      <form>
        <div className="input_taking">
          <input className="taker" type="text" name='room' placeholder="User Name" value="room" />


          <input className="taker" type="text" name='roomNo' placeholder="Email" value="roomNo" />
          <input className="taker" type="text" name='roomtype'  placeholder="Duration"value="roomtype" />
          <input className="taker" type="text" name='roomprice'  placeholder="Id-proof"value="roomprice"/>
{/* 
          <input className="taker" type="number" name='roomstatus' placeholder="Room" value="roomstat" />
          <input className="taker" type="text" name='imgurl'  value="imgurl"/> */}

        </div>
      </form>
      <button className="Add_Hotel"  >Pay Now</button>
    </div>
   </>
  )
}
