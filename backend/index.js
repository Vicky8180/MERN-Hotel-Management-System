const express = require('express')
const app = express()
const cors =require('cors')
const port = 5000

// this is importing or requireing database connection in it
const mongoDf = require("./db");



app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
  "Origin,X-Requested-With, Content-Type, Accept");
  next();
})

// var cors = require('cors');
app.use(cors());





// this one is  room route 
const roomsRoute= require('./routers/Datafecting');
//  here we are creating access for room roots and this will 
// fetch all data from backend
const User_Data=require('./routers/User_Data')
const Add_Hotel = require('./routers/Add_Hotel')
const Booked_HotelTakingId=require("./routers/DataForAvail")
app.use(express.json())
const Update_Data = require("./routers/Updatedata")
const Cancel=require("./routers/Cancel")
 app.use('/api/Database1forRoom', roomsRoute);
 app.use('/api/Database1forRoom',Add_Hotel);
 app.use('/api/Database1forRoom',User_Data);
 app.use('/api/Database1forRoom',Booked_HotelTakingId);
 app.use('/api/Database1forRoom',Cancel);

 app.use('/api/Database1forRoom',Update_Data);

// console.log(tt);

app.get('/', (req, res) => {
  res.send("hwllo world");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})