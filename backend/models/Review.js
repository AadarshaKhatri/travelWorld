const  mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  title:{
    type:String,
    require:true,
  }

});


const ReviewModel = mongoose.model("reviews",ReviewSchema);


module.exports = ReviewModel

