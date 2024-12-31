import mongoose, { mongo } from "mongoose";

const BookingSchema = new mongoose.Schema({
  
  userId:{
    type:String,
  },
  userEmail:{
    type:String,
  },
  tourName:{
    type:String,
    required:true

  },
  fullName:{
    type:String,
    require:true,
  },
  guestSize:{
    type:Number,
    required:true,
  },
  phone:{
    type:Number,
    required:true,
  },
  bookAt:{
    type:String,
  }
})

const BookingModel = mongoose.model("bookings",BookingSchema);

export default BookingModel;