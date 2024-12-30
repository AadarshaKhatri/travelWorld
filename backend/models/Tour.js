import mongoose from "mongoose";

const TourSchema  = new mongoose.Schema({
  title:{
    type:String,
    require:true,
  },
  city:{
    type:String,
    require:true,
  },
  address:{
    type:String,
    require:true,
  },
  distances:{
    type:Number,
    require:true,
  },
  phot:{
    type:Number,
    require:true,
  },
  description:{
    type:String,
    require:true,
  },
  price:{
    type:Number,
    require:true,
  },
  maxGroupSize:{
    type:Number,
    require:true,
  },
  reviews:[
    {
      type:mongoose.Types.ObjectId,
      ref:"reviews",
    },
  ],
  featured:{
    type:Boolean,
    default:false,
  },

}, {timestamps:true}
);


const TourModels = mongoose.model("tours",TourSchema);


export default TourModels

