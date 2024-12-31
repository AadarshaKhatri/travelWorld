import jwt from "jsonwebtoken";

export const GenerateToken = (user)=>{
try{
  const token  = jwt.sign({
    id:user._id,
    email:user.email,
  },
  process.env.TOKEN_SECRET,
  {expiresIn:"24h"})

  return token;
}
catch(err){
  console.log("Error generating the token ")
}
}