import TourModels from "../models/Tour.js"
import ReviewModel from "../models/Review.js"

export const createReview =async (req,res)=>{
  const id = req.params.id;
  const newReview = new ReviewModel({...req.body});
  try{
    const savedReview = await newReview.save();
    //Updating the tour review of the particular tour ID

    await TourModels.findByIdAndUpdate(id,{
      $push:{reviews:savedReview._id}
    });

    res.status(200).json({
      success:true,
      message:"Reviews Added",
      data:savedReview
    })
  }catch(err){
    res.status(500).json({
      success:false,
      message:"Internal Server Error"
    })
  }



  try{

  }catch(err){

  }

}