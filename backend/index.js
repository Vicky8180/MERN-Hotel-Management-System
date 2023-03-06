const express = require('express')
const app = express()
const port = 5000

// this is importing or requireing database connection in it
const mongoDf = require("./db");



app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
  "Origin,X-Requested-With, Content-Type, Accept");
  next();
})




// this one is  room route 
const roomsRoute= require('./routers/Datafecting');
//  here we are creating access for room roots and this will 
// fetch all data from backend
const Add_Hotel = require('./routers/Add_Hotel')
 app.use('/api/Database1forRoom', roomsRoute);
 app.use('/api/Database1forRoom',Add_Hotel);

// console.log(tt);

app.get('/', (req, res) => {
  res.send("hwllo world");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})