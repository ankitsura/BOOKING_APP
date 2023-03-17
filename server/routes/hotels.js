import express from "express";

import { deleteHotel, getHotels, getSingleHotel, newHotel, updateHotel } from "../controllers/hotelController.js";

const router =  express.Router();

router.get('/', getHotels);
router.get('/:id', getSingleHotel);
router.post('/new', newHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);


export default router;