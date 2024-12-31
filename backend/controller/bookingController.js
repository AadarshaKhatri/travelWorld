import BookingModel from "../models/Booking.js"

export const createBooking = async(req,res)=>{
  const newBooking  = new BookingModel(req.body);
  try{
    const bookedTour = await newBooking.save();
    res.status(200).json({
      success:true,
      message:"Successfully booked a tour!",
      data:bookedTour,
    })
  }catch(err){
    res.status(500).json({
      success:false,
      message:"Failed to book the tour!"
    })
    
  }

}

export const getBooking = async(req,res)=>{
  const id = req.params.id;
  try{
    const Booking = await BookingModel.findById(id);
    res.status(200).json({
      success:true,
      message:"Successfully found the booking!",
      data:Booking
    });
  }catch(err){
    res.status(500).json({
      success:false,
      message:"Internal Server Error!",
    })
  }
}


export const getAllBooking = async(req,res)=>{

  try{
    const Booking = await BookingModel.find();
    res.status(200).json({
      success:true,
      message:"Successfully found the booking!",
      data:Booking
    });
  }catch(err){
    res.status(500).json({
      success:false,
      message:"Internal Server Error!",
    })
  }
}