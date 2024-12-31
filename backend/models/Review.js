import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
  productID:{
    type:mongoose.Types.ObjectId,
    ref:"tours",
  },
  username:{
    type:String,
    required:true,
  },
  reviewText:{
    type:String,
    required:true,
  },
  ratings:{
    type:Number,
    required:true,
    min:0,
    max:5,
    default:0,
  },
},{timestamps:true});

const ReviewModel = mongoose.model("reviews",ReviewSchema);


export default ReviewModel;

