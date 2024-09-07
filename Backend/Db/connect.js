import mongoose from "mongoose";
const ConnectDatabase = async ()=>{
   try {
    await mongoose.connect(process.env.DB);
    console.log("connected sucessfull");
   } catch (error) {
    console.log(error);
    throw error;
   }
}
export default ConnectDatabase;