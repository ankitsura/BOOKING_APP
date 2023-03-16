import express from "express";

const router =  express.Router();

router.get('/', (req, res) => {
    res.send('Hello /');
});
router.get('/register', (req, res) => {
    res.send('Hello register');
});

export default router;