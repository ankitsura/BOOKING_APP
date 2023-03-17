import Hotel from '../models/Hotel.js'


export const newHotel = async (req, res, next) => {
    const data = req.body;
    try {
        const newHotel = await Hotel.create(data);
        res.status(200).json(newHotel);
    } catch (err) {
        next(err);
    }
}
export const getHotels = async (req, res, next) => {
    try {
        const Hotels = await Hotel.find({});
        res.status(200).json(Hotels);
    } catch (err) {
        next(err);
    }
}
export const getSingleHotel = async (req, res, next) => {
    const id = req.params.id;
    try {
        const hotel = await Hotel.find({_id: id});
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
}

export const updateHotel = async (req, res, next) => {
    const updates = req.body;
    const id = req.params.id;
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, updates, {new: true});
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
}

export const deleteHotel = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(id);
        res.status(200).json({
            message: 'Hotel has been deleted'
        });
    } catch (err) {
        next(err);
    }
}