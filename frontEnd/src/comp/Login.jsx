import { ToastContainer } from "react-toastify";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { handleError } from "../Utils";
import { handleSucess } from "../Utils";
const Login =()=>{
    const Navigate = useNavigate();
    const [login, setLogin] = useState({
      email: "",
      password: "",
    });
    function handlechange(e) {
      const { name, value } = e.target;
      console.log(name, value);
      const copy = {...login };
      copy[name] = value;
      setLogin(copy);
    }
    async function submitLogin(e) {
        e.preventDefault();
        const {  email, password } = login;
        if (email == "" || password == "") {
          return handleError("All field are required here!!");
        }
        try {
            const url = "http://localhost:1010/auth/login";
            const response = await fetch(url,{
                method: "POST",
                headers: {
                    "content-type":"application/json"
                }
                ,
                body: JSON.stringify(login)
            });
            const result = await response.json();
            console.log(result)
            const {sucess,message,email,  jwtToken} = result;
            if(sucess){
                handleSucess(message);
                localStorage.setItem("jwtToken",jwtToken);
                localStorage.setItem("email", email);
                setTimeout(()=>{
                  Navigate('/home');
                },2000);
            }
            if(!sucess){
                return handleError("not valid",message);
            }
        } catch (error) {
            handleError(error);
        }
      }
    return(
        <>
        <div className="sign_page">
            <h1> Login </h1>
            <form  onSubmit={submitLogin} className="form_signup" method="POST">
               <div className="sign_up">
                <label htmlFor="email">Email:</label>
                <input type="email"  onChange={handlechange} name="email" id="email" value={login.email} placeholder=" Enter your Email" />
                <label htmlFor="password">password:</label>
                <input type="password"  onChange={handlechange} name="password" value={login.password} id="password" placeholder=" Enter your password" />
                <p>Don't have an account  <Link to={"/signup"}>Sign up</Link></p>
               </div>
               <button>Login</button>      
            </form>
         </div>
         <ToastContainer/>
        </>
    )
}
export default Login;