import express from "express";
import { createRoom, deleteRoom, getRooms, getSingleRoom, updateRoom } from "../controllers/roomController.js";
const router =  express.Router();

import { verifyAdmin } from "../utils/verifyToken.js";


router.post('/:hotelId', verifyAdmin, createRoom);
router.put('/:id', verifyAdmin, updateRoom);
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);
router.get('/:id', getSingleRoom);
router.get('/', getRooms);


export default router;