
const mongoose= require('mongoose');
var mongoURL="mongodb+srv://Anoop:Anoop@main-dbs.xyk7qix.mongodb.net/Database1forRoom"
// const mongoDB=()=>{
   mongoose.connect(mongoURL,{useNewUrlParser:true ,useUnifiedTopology: true})
// }
var connection=mongoose.connection;
connection.on('error' , ()=>{
   console.log(" bhari mistake  ho gya ")
})
connection.on('connected' , ()=>{
   console.log("connected aur chal gya")
})
module.exports =mongoose;

