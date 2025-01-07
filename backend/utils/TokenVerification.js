import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';

export const tokenVerification = async (req,res,next)=>{
  if(!res.cookies){
    return res.status(401).json({
      success:false,
      message:"Invalid Token",
    })
  }

  try{
    let decoded_token = jwt.verify(req.cookies.token , process.env.TOKEN_SECRET);
    let user  = await UserModel.findOne({
      email:decoded_token.email,
      id:decoded_token.id,
    }).select('-password');

    req.user = user
    next();
  }
  catch(err){
    res.status(500).json({
      success:false,
      message:"Internal Server Error",
    })
  }


}



export const userVerification = async(req,res,next)=>{
  tokenVerification(req,res,next,()=>{
    if(req.user.id === req.params.id || req.user.role === "user"){

      console.log(req.user.id);
      console.log(req.params.id);
      next();
    }else{
      res.status(401).json({
        success:false,
        message:"User not authorized!"
      })
    }
  })
}


export const adminVerification = async(req,res,next)=>{
  tokenVerification(req,res,next,()=>{
    if(req.user.role === "admin"){
      next();
    }else{
      res.status(401).json({
        success:false,
        message:"User not authorized!"
      })
    }
  })
}