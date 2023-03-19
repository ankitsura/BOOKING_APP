import express from "express";

import { deleteHotel, getHotels, getSingleHotel, newHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router =  express.Router();

router.post('/', verifyAdmin, newHotel);
router.put('/:id', verifyAdmin, updateHotel);
router.delete('/:id', verifyAdmin, deleteHotel);
router.get('/:id', getSingleHotel);
router.get('/', getHotels);


export default router;