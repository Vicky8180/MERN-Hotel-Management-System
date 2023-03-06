import React from 'react'
import Navbar from "../MainPage/Navbar/Navbar"
import "./AvailbleRoom.css"
import { useNavigate } from "react-router-dom"

export default function AvailbleRoom() {
const nevigate=new useNavigate();

function hitting(){
  nevigate("/bookingpage")
}

  return (
    <>
      <Navbar />

      <div className='A_R_main'>

        <div className='A_R_main_1'>

          <div className='A_R_main_11'>
            Availble by date
          </div>
          <div className='A_R_main_11'>
            Availble by Type
          </div>
          <div className='A_R_main_11'>
            Availble by Room No
          </div>
        </div>
        <div className='A_R_main_2'>

          <div className='A_R_main_21'>

            <div className="A_R_main_211">
              <img src="https://www.theparkhotels.com/images/site-specific/navi-mumbai/home/navi-mumbai-night-view.jpg" height={210} width={340.1} />

            </div>
            <div className="A_R_main_211">
              <h1>Hotel OYO</h1>
              <h2>  Type C</h2>
              <h2>Price: $500</h2>
            </div>
            <div className="A_R_main_211">
              <button className='btn_armain'>
                BOOK NOW !
              </button>
            </div>
          </div>



          <div className='A_R_main_21'>

            <div className="A_R_main_211">
              <img src="https://www.theparkhotels.com/images/site-specific/navi-mumbai/home/navi-mumbai-night-view.jpg" height={210} width={340.1} />

            </div>
            <div className="A_R_main_211">
              <h1>Hotel OYO</h1>
              <h2>  Type C</h2>
              <h2>Price: $500</h2>
            </div>
            <div className="A_R_main_211">
              <button className='btn_armain'>
                BOOK NOW !
              </button>
            </div>
          </div>



          <div className='A_R_main_21'>

            <div className="A_R_main_211">
              <img src="https://www.theparkhotels.com/images/site-specific/navi-mumbai/home/navi-mumbai-night-view.jpg" height={210} width={340.1} />

            </div>
            <div className="A_R_main_211">
              <h1>Hotel OYO</h1>
              <h2>  Type C</h2>
              <h2>Price: $500</h2>
            </div>
            <div className="A_R_main_211">
              <button className='btn_armain'>
                BOOK NOW !
              </button>
            </div>
          </div>



          <div className='A_R_main_21'>

            <div className="A_R_main_211">
              <img src="https://www.theparkhotels.com/images/site-specific/navi-mumbai/home/navi-mumbai-night-view.jpg" height={210} width={340.1} />

            </div>
            <div className="A_R_main_211">
              <h1>Hotel OYO</h1>
              <h2>  Type C</h2>
              <h2>Price: $500</h2>
            </div>
            <div className="A_R_main_211">
              <button className='btn_armain' onClick={hitting}>
                BOOK NOW !
              </button>
            </div>
          </div>



          <div className='A_R_main_21'>

            <div className="A_R_main_211">
              <img src="https://www.theparkhotels.com/images/site-specific/navi-mumbai/home/navi-mumbai-night-view.jpg" height={210} width={340.1} />

            </div>
            <div className="A_R_main_211">
              <h1>Hotel OYO</h1>
              <h2>  Type C</h2>
              <h2>Price: $500</h2>
            </div>
            <div className="A_R_main_211">
              <button className='btn_armain'>
                BOOK NOW !
              </button>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}
