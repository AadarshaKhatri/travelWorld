import mongoose from "mongoose";

async function ConnectToDb(){
  mongoose.set('strictQuery',false);
  try{
    const dbURI = process.env.DATABASE_URI;
    await mongoose.connect(dbURI)
    console.log("Connected to Database");
  }
  catch(error){
    console.log("Error Connecting to Database");
    console.log(error)
  }
}

export default ConnectToDb;