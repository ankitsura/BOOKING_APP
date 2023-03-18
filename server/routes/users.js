import express from "express";
<<<<<<< HEAD
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
=======
import { verifyToken } from "../utils/verifyToken.js";
>>>>>>> f6f3fdb04cdf432de15737349acbe4ee49a789f1

import { deleteUser, getUsers, getSingleUser, updateUser } from "../controllers/userController.js";

const router =  express.Router();

router.get('/auth', verifyToken, (req, res) => {
    res.send('Helo User');
});
<<<<<<< HEAD
router.get('/', verifyUser, getUsers);
=======
router.get('/', verifyToken, getUsers);
>>>>>>> f6f3fdb04cdf432de15737349acbe4ee49a789f1
router.get('/:id', verifyToken, getSingleUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);


export default router;