import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controller/userController.js";
import { userLogin, userRegister } from "../controller/authController.js";

const router = express.Router();


router.get("/:id",getSingleUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
router.get("/getAllUser",getAllUser);


router.post("/register",userRegister);
router.post("/login",userLogin);


export default router;

