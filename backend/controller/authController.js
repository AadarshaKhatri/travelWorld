import bcrypt from 'bcrypt';
import UserModel from '../models/User.js'
import { GenerateToken } from '../utils/TokenGenerator.js';

//========== User Registration ===========
export const userRegister = async(req,res)=>{
  const {username,email,password} = req.body;
   try{
    if(!username || !email || !password){
      res.status(400).json({
        success:false,
        message:"Input required"
      })
    }
    const ExistingUser = await UserModel.findOne({
      email:email,
    });

    if(ExistingUser){
      res.status(409).json({
        success:false,
        message:"User already exists. Try again with different credentials",
      })
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const user = await UserModel.create({
      email,
      username,
      password:hashedPassword,
    });
    
    const JWT_TOKEN = GenerateToken(user);
    console.log(JWT_TOKEN);
    res.cookie('token',JWT_TOKEN);
    res.status(201).json({
      success:true,
      message:"Successfully created a User",
      token:JWT_TOKEN,
      data:user,
    })

   } catch(err){
    res.status(500).json({
      success:false,
      message:"Failed to Register the user",
    })
   }
}


//========== User Login =================

export const userLogin = async(req,res)=>{
  const{email,password} = req.body;
  if(!email || !password){
    res.status(400).json({
      success:false,
      message:"Email or Password is required",
    })
  }
  try{
    const FoundUser = await UserModel.findOne({
     email:email,
    });

    if(!FoundUser){
      res.status(404).json({
        success:false,
        message:"Username or Password is Incorrect",
      })
    }

    const PasswordMatch = await bcrypt.compare(password,FoundUser.password);
    if(PasswordMatch){
      const JWT_TOKEN = GenerateToken(FoundUser);
      res.cookie("token",JWT_TOKEN);
      res.status(200).json({
        success:true,
        message:"User Successfully Logged In",
        token:JWT_TOKEN,
        data:FoundUser,
      })

    }else{
      res.status(404).json({
        success:false,
        message:"Username or Password is Incorrect"
      })
    }

  }
  catch(err){
    res.status(500).json({
      success:false,
      message:"Internal Server Error",
    })
  }
}