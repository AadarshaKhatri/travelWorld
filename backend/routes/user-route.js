import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controller/userController.js";
import {userVerification,adminVerification } from '../utils/TokenVerification.js';

const router = express.Router();


router.get("/:id",userVerification,getSingleUser);
router.put("/:id",userVerification,updateUser);
router.delete("/:id",userVerification,deleteUser);
router.get("/getAllUser", adminVerification,getAllUser);





export default router;

