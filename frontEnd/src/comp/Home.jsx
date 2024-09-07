import { useEffect } from "react";

const Home =()=>{
    useEffect(async()=>{
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
            const {sucess,message,email,  jwtToken} = result;
            if(jwtToken){
                
            }
    }catch (error) {
        handleError(error);
    }
   },[]);
    return(
        <>

        </>
    )
}
export default Home;