import express from "express";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

import { deleteUser, getUsers, getSingleUser, updateUser } from "../controllers/userController.js";

const router =  express.Router();

router.get('/auth', verifyToken, (req, res) => {
    res.send('Helo User');
});
router.get('/', verifyUser, getUsers);
router.get('/:id', verifyToken, getSingleUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);


export default router;