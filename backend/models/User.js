import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  photo:{
    type:String,
  },
  role:{
    type:String,
    default:"user"
  },
},{timestamps:true});


const UserModel = mongoose.model("users",UserSchema);


export default UserModel;

