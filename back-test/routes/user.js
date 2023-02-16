import express from "express"
import {  verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

import {updateUser,deleteUser, getAllUser,getuser} from "../controllers/user.js"


//update user
router.put("/:id", updateUser);

// delete user
router.delete("/find/:id",  deleteUser);

// get All users
router.get("/", getAllUser);

// get user
router.get("/:id",getuser);

export default router;