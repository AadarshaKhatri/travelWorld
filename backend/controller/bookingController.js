import BookingModel from "../models/Booking.js"

export const createBooking = async(req,res)=>{
  const id = req.params.id 
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