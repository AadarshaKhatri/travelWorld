const  mongoose = require('mongoose');

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
    deafult:0,
  },
},{timestamps:true});

const ReviewModel = mongoose.model("reviews",ReviewSchema);


module.exports = ReviewModel

