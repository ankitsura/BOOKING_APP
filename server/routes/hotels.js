import express from "express";
import Hotel from "../models/Hotel.js";

const router =  express.Router();

//CREATE
router.post('/', async (req, res) => {
    try {
        const newHotel = await Hotel.create(req.body).save();
        res.status(200).json(newHotel);
    } catch (err) {
        res.status(500).json(err);
    }
});


export default router;