import express from "express";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

import { deleteUser, getUsers, getSingleUser, updateUser } from "../controllers/userController.js";

const router =  express.Router();

router.get('/', verifyAdmin, getUsers);
router.get('/:id', verifyUser, getSingleUser);
router.put('/:id', verifyUser, updateUser);
router.delete('/:id', verifyUser, deleteUser);


export default router;