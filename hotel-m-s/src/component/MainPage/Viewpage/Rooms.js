import React, {useEffect, useState } from "react"
import "./Rooms.css"
import axios from "axios"

function Rooms(props){
// const {dataq,setDataq}=useState([]);
//     useEffect(async()=>{
//         try {
//             const data= (await axios.get('/api/Database1forRoom/getallrooms')).data
//             console.log(data);
//             // setDataq(data);
//         } catch (error) {
//             console.log(error);
//         }
//      },[])

    // console.log(props);
    // const [cdata,setComingdata]=useState()
    // setComingdata(props.goingdatafromhere)
      

// temp();
// async function  temp(){
// const data= ( await axios.get('/api/Database1forRoom/getallrooms')).data
// .then((data)=>{
//     setDataq(data);
// })
// console.log(props.gdata.imgurl);
// }

// const loadData= async()=>{
//     const response=await fetch("http://localhost:5000/api/Database1forRoom/getallrooms",{
//     method:"POST",
//     header: {
//         'Content-Type': 'application/json'
//     }});
//     response= await response.json();
//     console.log(response[0]);

// } 
// useEffect(()=>{
//     loadData();
// },[])
    return <>
        <div className="Rooms-one">
            <div className="RoomImage"> 
      
        
            <img src={props.gdata.imgurl} width={350} height={160}/>
        
             </div>
            <div className="RoomData"> 
            {/* {props.gdata.map(item1=> ( */}
                <h4 className="RoomData-2"><pre>Hotel Name :{props.gdata.room}</pre></h4>
                <h4 className="RoomData-2"><pre>Room No    :{props.gdata.roomNo}</pre></h4>
                <h4 className="RoomData-2"><pre>Type       :{props.gdata.roomtype}</pre></h4>
                <h4 className="RoomData-2"><pre>Price      :{props.gdata.roomprice}</pre></h4>
                
            {/* ))} */}
      
            
           
            

            </div>
        </div>
    </>
}
 export default Rooms;