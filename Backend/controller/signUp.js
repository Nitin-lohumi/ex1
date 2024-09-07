import { User } from "../model/User_model.js";
import bcrypt from "bcryptjs"
const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User is allready exist", sucess: false });
    }
    const usermodel = new User({ name, email, password });
    usermodel.password =await bcrypt.hash(password,10);
    await usermodel.save();
    res.status(200).json({ message: "suceess ", sucess: true });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      sucess: false,
    });
  }
};
export { signUp };
