import { ToastContainer } from "react-toastify";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { handleError } from "../Utils";
import { handleSucess } from "../Utils";
const Signup = () => {
  const Navigate = useNavigate();
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });
  async function submitSignup(e) {
    e.preventDefault();
    const { name, email, password } = signup;
    if (name === "" || email == "" || password == "") {
      return handleError("All field are required here!!");
    }
    try {
        const url = "http://localhost:1010/auth/signup";
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "content-type":"application/json"
            }
            ,
            body: JSON.stringify(signup)
        });
        const result =await response.json();
        const {sucess,message} = result;
        if(sucess){
            handleSucess(message);
            setTimeout(()=>{
              Navigate('/login');
            },2000);
        }
        if(!sucess&&message=="User is allready exist"){
            return handleError("your email is exits");
        }
        if(result.error.details[0].message =='"password" length must be at least 4 characters long'){
           return handleError('"password" length must be at least 4 characters long');
        }
    } catch (error) {
        handleError(error);
    }
  }
  function handlechange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    const copy = { ...signup };
    copy[name] = value;
    setSignup(copy);
  }
  return (
    <>
      <div className="sign_page">
        <h1>Sign Up</h1>
        <form onSubmit={submitSignup} className="form_signup" method="POST">
          <div className="sign_up">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={handlechange}
              id="name"
              name="name"
              placeholder=" Enter your name"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              onChange={handlechange}
              id="email"
              name="email"
              placeholder=" Enter your Email"
            />
            <label htmlFor="password">password:</label>
            <input
              type="password"
              onChange={handlechange}
              id="password"
              name="password"
              placeholder=" Enter your password"
            />
            <p>
              Already have an account <Link to={"/login"}>Login</Link>
            </p>
          </div>
          <button>signUP</button>
        </form>
      </div>
        <ToastContainer/>
    </>
  );
};
export default Signup;
