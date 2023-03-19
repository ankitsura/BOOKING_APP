import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
        const newRoom = await Room.create(req.body);
        await Hotel.findByIdAndUpdate(hotelId, { $push: {rooms: newRoom._id }})
        res.status(200).json(newRoom);
    } catch (err) {
        next(err);
    }
}

export const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
}
export const getSingleRoom = async (req, res, next) => {
    const id = req.params.id;
    try {
        const room = await Room.findById(id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
}

export const updateRoom = async (req, res, next) => {
    const updates = req.body;
    const id = req.params.id;
    try {
        const updatedRoom = await Room.findByIdAndUpdate(id, { $set: updates }, {new: true});
        res.status(200).json(updatedRoom);
    } catch (err) {
        next(err);
    }
}

export const deleteRoom = async (req, res, next) => {
    const id = req.params.id;
    const hotelId = req.params.hotelId;
    try {
        const deletedRoom = await Room.findByIdAndDelete(id);
        await Hotel.findByIdAndUpdate(hotelId, {$pull: { rooms: id }})
        res.status(200).json({
            message: 'Room has been deleted'
        });
    } catch (err) {
        next(err);
    }
}