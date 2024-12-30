import UserModel from "../models/User.js";

//============ Create a User ===============
export const createUser = async(req,res)=>{
  const newUser = new UserModel(req.body);
  try{
    const savedUser = await newUser.save();
    res.status(200).json({
      success:true,
      message:"Successfully Created User",
      data:savedUser,
    });
  }
  catch(err){
    res.status(500).json({
      success:false,
      message:"Failed to Create A User",
      data:savedUser,
    });
  }
}

//=========== Update a User ===============
export const updateUser = async(req,res)=>{
  const {id} = req.params.id
  try{
    const FoundUser = await UserModel.findByIdAndUpdate(id, 
    {
      $set:req.body
    },{
      new:true,
      upsert:true,
    }
    );
    res.status(200).json({
      success:true,
      message:'Successfully Updated the User',
      data:FoundUser,
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      message:"Failed to find User",
    })
  }
}

//=========== delete a User ===============
export const deleteUser = async(req,res)=>{
  const {id} = req.params.id
  try{
    await UserModel.findByIdAndDelete();
    res.status(200).json({
      success:true,
      message:"Successfully Deleted the User",
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      message:"Failed to Delete the User",
    })
  }
}

//===========  Get Single User ===============
export const getSingleUser = async(req,res)=>{
  const {id} = req.params.id
  try{
    const foundUser  = await findById(id);
    res.status(200).json({
      success:true,
      message:"Successfully found the User",
      data:foundUser,
    })

  }
  catch(err){
    res.status(500).json({
      success:false,
      message:"Failed to find the User",
    })
  }
}

//===========  All User ===============
export const getAllUser = async(req,res)=>{
  try{
    const AllUsers = await UserModel.find();
    res.status(200).json({
      success:true,
      message:"Successfully loaded the Users",
      data:AllUsers,
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      message:"Failed to load Users",
    })
  }
}