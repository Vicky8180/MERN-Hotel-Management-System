const express =require('express');
const router=express.Router();
const Modell=require("../models/Roommodel");
// imported because body sends text file it convert in json
const bodyParser = require('body-parser')



// this mothod of "body-parser"
var jsonParser = bodyParser.json()

// this import is for validation 
// const {body, validationResult } = require('express-validator');



router.post("/add_hotel",

// this is middileware used for changing palin/text into json 
jsonParser,
   
//  ye to validator hai ki room ka length kitna kya hona chahiye 
// iske liye line 13 ko import kiya gya hai 
// aur ye sahi hai ki nhi line 36-39 check kr rahe hai 
  // [
  // body('room').isLength({ min: 1 }),
  // body('roomNo').isLength({ min: 1 }),
  // body('roomtype').isLength({ min: 1 }),
  // body('roomprice').isLength({ min: 1 }),
  // body('roomstatus').isLength({ min: 1 }),
  // body('imgurl').isLength({ min: 1 })],

async (req,res)=>{


  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  
   try {
     await Modell.create({
        room:req.body.room,
        roomNo:req.body.roomNo,
        roomtype:req.body.roomtype,
        roomprice:req.body.roomprice,
        roomstatus:req.body.roomstatus,
        imgurl:req.body.imgurl,

        // ye to static data hai bas check krne ke liye tha 
        // room:"Hotel Royal",
        // roomNo:8,
        // roomtype:"A Type",
        // roomprice:100,
        // roomstatus:1,
        // imgurl:"https://www.theparkhotels.com/images/site-specific/navi-mumbai/home/navi-mumbai-night-view.jpg",
         
        }).then(add_hotel=>(res.json(add_hotel)))
      // }).then(res.json(temp))
   } catch (error) {
    console.log(error)
    res.json({success:false})

   }
  
})
module.exports= router;