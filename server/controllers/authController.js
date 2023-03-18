import User from  '../models/User.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

import { createError }  from '../utils/error.js';
<<<<<<< HEAD
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });
=======

export const register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const user = User.findOne({username: username});
        if(user){
            return next(createError(404, "Username already exists"));
        }
        // const hashedPassword = await bcrypt.hash(password, 12);
        // const newUser = await User.create({username, email, password: hashedPassword});
        // OR......
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({
            username,
            email,
            password: hash,
        });
        await newUser.save();
>>>>>>> f6f3fdb04cdf432de15737349acbe4ee49a789f1
        res.status(200).json({
            user: newUser,
            message: 'Successfully registered',
        });
    } catch (err) {
        next(err);
    }
}


export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user){
            return next(createError(404, "User not found"));
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect){
            return next(createError(400, "Incorrect username or password"));
        }
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {
            HttpOnly: true,
        })
        .status(200)
        .json({ ...otherDetails });
    } catch (err) {
        next(err);
    }
}