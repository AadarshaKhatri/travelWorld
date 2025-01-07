import express from 'express';
import { createBooking, getAllBooking, getBooking } from '../controller/bookingController.js';
import { adminVerification, userVerification } from '../utils/TokenVerification.js';

const router = express.Router();
router.post("/:id",createBooking);
router.get("/:id",getBooking);
router.get("/",adminVerification,getAllBooking);

export default router;