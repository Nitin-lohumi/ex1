import { Router } from "express";
import { signUp } from "../controller/signUp.js";
import { LoginValidation, signupValidation } from "../middleWares/validation.js";
import login from "../controller/login.js";
const route = Router();
route.post('/login',LoginValidation,login);
route.post('/signup',signupValidation,signUp);
export default route;