import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const isAuthenticated = async(req,res,next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Login first"
            })
        }
        const decoded = await jwt.verify(token,process.env.JWTSECRET)
        // console.log(decoded)
        req.id = decoded.userId
        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          })
    }
}

export default isAuthenticated