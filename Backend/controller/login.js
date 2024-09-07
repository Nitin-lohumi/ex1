import { User } from "../model/User_model.js";
import Bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";

const login = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = User.findOne({email});
      const DcryptPass = Bcrypt.compare(password,user.password)
      if(!DcryptPass){
         res.status(409).json({
            message: "not valid email and paswrord",
            sucess: false,
            DcryptPass
          });
      }
      const jwtToken = jwt.sign(
        {email:user.email,_id:user.id},
        process.env.JWT_SECRET,
        {expiresIn:'24h'}
      )
      res.status(200).json({
        message: "login sucess full",
        sucess: true,
        jwtToken,
        email,
        name:user.name
    });
    user.save();
  } catch (error) {
    res.status(500).json({
        message:"internal server error",
        sucess:false
    });
  }
  
};
export default login;
