import mongoose from "mongoose";

<<<<<<< HEAD
const UserSchema = mongoose.Schema({
=======
const UserSchema = new mongoose.Schema({
>>>>>>> f6f3fdb04cdf432de15737349acbe4ee49a789f1
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});


export default mongoose.model('User', UserSchema);