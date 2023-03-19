import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, 'You are not authenticated'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return next(createError(403, 'Invalid Token'));
        }
        req.user = user;  //assigned property 'user' to request
        next();
    })
}

export const verifyUser = (err, req, res, next) => {
    verifyToken(err , req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else {
            if (err) {
                return next(createError(403, 'Unauthorized Access'));
            }
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin){
            next();
        } else {
            if (err) {
                return next(createError(403, 'Unauthorized Access'));
            }
        }
    })
}