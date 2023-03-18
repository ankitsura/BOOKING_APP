import User from '../models/User.js'


export const getUsers = async (req, res, next) => {
    try {
        const Users = await User.find();
        res.status(200).json(Users);
    } catch (err) {
        next(err);
    }
}
export const getSingleUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

        const User = await User.find({_id: id});
        res.status(200).json(User);
    } catch (err) {
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    const updates = req.body;
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updates, {new: true});
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json({
            message: 'User has been deleted'
        });
    } catch (err) {
        next(err);
    }
}