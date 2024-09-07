import express from "express"
import 'dotenv/config.js'
import ConnectDatabase from "../Db/connect.js";
import bodyParser from "body-parser";
import cors from "cors";
import route from "../routes/AuthRouter.js";
import productrout from "../routes/productRout.js";

const app = express();
ConnectDatabase();
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',route);
app.use('/product',productrout)
app.get('/',(req,res)=>{
    res.send("this is sucessfully build");
});
app.listen(process.env.PORT,function(error){
      if(error) console.log(error);
      console.log("your app is listen in ",process.env.PORT);
})