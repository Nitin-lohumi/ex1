import jwt from "jsonwebtoken";
const insurePath = (req,res,next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403).json({
            message:"unauthorized member"
        })
    }
    try {
        const decode = jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({
            message:"unauthorized member"
        })
    }
}
export default insurePath;