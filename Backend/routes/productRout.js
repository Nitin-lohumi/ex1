import { Router } from "express";
import insurePath from "../middleWares/productAuth.js";
const productrout = Router();
productrout.get('/',insurePath,(req,res)=>{
    console.log("logged user detail----", req.user );
      res.status(200).json([
        {
            name:"mobile",
            prize:10000
        },
        {
            message: "you are in a safe place"
        }
      ])
});
export default productrout;