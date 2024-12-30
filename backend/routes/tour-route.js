import express from 'express';
import { deleteTour, featureTour, getAllTour, getCount, getSingleTour, newTour, searchTour, updateTour } from '../controller/tourController.js';

const router = express.Router();

router.post("/", newTour);
router.put("/:id", updateTour)
router.delete("/:id", deleteTour)
router.get("/:id", getSingleTour)
router.get("/", getAllTour);
router.get("/search/getTourBySearch", searchTour)
router.get("/search/getFeaturedTour",featureTour);
router.get("/search/getTourCount",getCount);


export default router;