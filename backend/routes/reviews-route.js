import express from 'express';
import { createReview } from '../controller/reviewController.js';
import { userVerification } from '../utils/TokenVerification.js';

const router = express.Router();

router.post("/:id",userVerification, createReview);


export default router;