import express from 'express';
import { deleteTour, featureTour, getAllTour, getCount, getSingleTour, newTour, searchTour, updateTour } from '../controller/tourController.js';
import { adminVerification } from '../utils/TokenVerification.js';
const router = express.Router();

router.post("/", adminVerification, newTour);
router.put("/:id", adminVerification, updateTour)
router.delete("/:id",adminVerification, deleteTour)
router.get("/:id",getSingleTour)
router.get("/", getAllTour);
router.post("/search/getTourBySearch", searchTour)
router.get("/search/getFeaturedTour", featureTour);
router.get("/search/getTourCount", getCount);


export default router;