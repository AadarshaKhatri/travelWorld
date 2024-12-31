import express from 'express';
import { createBooking } from '../controller/bookingController.js';
import { userVerification } from '../utils/TokenVerification.js';

const router = express.Router();
router.post("/:id",userVerification,createBooking);

export default router;