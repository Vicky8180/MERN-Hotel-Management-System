
const mongoose= require('mongoose');

// var mongoURL="mongodb://Anoop:Anoop@ac-gop7c2x-shard-00-00.xyk7qix.mongodb.net:27017,ac-gop7c2x-shard-00-01.xyk7qix.mongodb.net:27017,ac-gop7c2x-shard-00-02.xyk7qix.mongodb.net:27017/?ssl=true&replicaSet=atlas-ybd2w2-shard-0&authSource=admin&retryWrites=true&w=majority"

var mongoURL="mongodb+srv://Anoop:Anoop@main-dbs.xyk7qix.mongodb.net/Database1forRoom"
// const mongoDB=()=>{
   mongoose.connect(mongoURL,{useNewUrlParser:true ,useUnifiedTopology: true})
// }
var connection=mongoose.connection;
connection.on('error' , ()=>{
   console.log(" bhari mistake  ho gya mongodb me ")
})
connection.on('connected' , ()=>{
   console.log("connected aur chal gya")
})
module.exports =mongoose;

