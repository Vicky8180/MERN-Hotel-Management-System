const express = require('express')
const app = express()
const port = 5000

// this is importing or requireing database connection in it
const mongoDf = require("./db");
// this one is  room route 
const roomsRoute= require('./routers/Datafecting');
//  here we are creating access for room roots and this will 
// fetch all data from backend

 app.use('/api/Database1forRoom', roomsRoute);

// console.log(tt);

app.get('/', (req, res) => {
  res.send("hwllo world");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})