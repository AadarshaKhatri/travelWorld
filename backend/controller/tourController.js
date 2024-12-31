
import TourModels from "../models/Tour.js";

//========== Creating a Tour ========== //
export const newTour= async(req,res)=> {
  const newTour = new TourModels(req.body);

  try{
    const savedTour = await newTour.save()
    res.status(200).json({
      success:true,
      message:"Successfully Created",
      data:savedTour,
    })

  }catch(err){
   res.status(500).json({
    success:false,
    message:"Failed to create. Try again",
   })
  }
  
}

//========== Updating a Tour ========== //
export const updateTour = async(req,res)=>{
  const id = req.params.id;
  try{
    const findTour = await TourModels.findByIdAndUpdate(id, {
      $set:req.body,
    }, {
      new:true,
      upsert:true,
    }).populate('reviews')

    res.status(200).json({
      success:true,
      message:"Successfully Updated",
      data:findTour
    })

  }catch(err){
    res.status(500).json({
      success:false,
      message:"Failed to Update, Try again later!",
    })


  }

}



//========== Deleting a Tour ========== //
export const deleteTour = async(req,res)=>{
  const id = req.params.id;
  try{
    await TourModels.findByIdAndDelete(id);
    res.status(200).json({
      success:true,
      message:"Successfully Deleted",
    })

  }catch(err){
    res.status(200).json({
      success:true,
      message:"Failed to delete data. Try again later",
    })
  }
}



//========== Single Tour ========== //
export const getSingleTour = async(req,res)=>{
  const id = req.params.id;
  try{
    const FoundTour = await TourModels.findById(id).populate('reviews');

    res.status(200).json({
      success:true,
      message:"Successfully Found!",
      data:FoundTour
    })
  }catch(err){
    res.status(500).json({
      success:false,
      message:"Failed to find the tour"
    })
    
  }

}


//========== All Tour ========== //
export const getAllTour = async(req,res)=>{
  try{
    const page = parseInt(req.query.page);
    const tours = await TourModels.find({}).skip(page * 8).limit(8).populate('reviews');
    res.status(200).json({
      success:true,
      count:tours.length,
      message:"Successfully retrieved all the data",
      data:tours,
    })
  }catch(err){
    res.status(500).json({
      success:true,
      message:"Successfully retrieved the data",
    })
    
  }
}



//========== Get Tour by Search ========== //

export const searchTour = async(req,res)=>{
  const {address,distance,maxGroupSize} = req.body; //Fix the name of the inputs in the frontend before hitting the API

  try{
    const SearchedTour = await TourModels.findOne({
      maxGroupSize:maxGroupSize,
      address:address,
      distances:distance

    }).populate('reviews')

    res.status(200).json({
      success:true,
      message:"Successfully found the tour",
      data:SearchedTour,
    })
    
  }catch(err){
    res.status(404).json({
      success:false,
      message:"Not Found"
    })
  }
}


//========== Featured Tour ========== //

export const featureTour = async(req,res)=>{
  try {

    const FeaturedTour = await TourModels.find({
      featured:true,
    }).populate('reviews');

    res.status(200).json({
      success:true,
      count:FeaturedTour.length,
      message:"Successfully found featured Tour",
      data:FeaturedTour
    })
    
  } catch (err) {
    res.status(404).json({
      success:true,
      meesage:"Failed to find feature tours",
    });
  }
}


export const getCount = async(req,res)=>{
  try{
    const tourCount = await TourModels.estimatedDocumentCount();
    res.status(200).json({
      success:true,
      message:"Successfully generated Tour Count",
      data:tourCount
    });

  }catch(err){
    res.status(500).json({
      success:false,
      message:"Failed to generate  Tour Count",
      data:tourCount
    });
  }
}
