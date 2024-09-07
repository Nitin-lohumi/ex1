import { toast } from "react-toastify";
export const handleSucess = (msg)=>{
    toast.success(msg,{
        position:"top-right",
        autoClose:2000,
        className: "toast-message",
    })
}
export const handleError = (msg) =>{
    toast.error(msg, {
        position: "top-right",
        autoClose: 2000,
        className: "toast-message",
        });
}