const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register a new user
router.post('/register', async (req, res) => {
    try {
        const {firstName, lastName, email, password, address, phoneNumber} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({firstName, lastName, email, password: hashedPassword, address, phoneNumber});
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

//Login existing user
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            return res.status(401).json({message: 'Authentication failed'});
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).json({message: 'Authentication failed'});
        }
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        res.json({token, userId: user._id});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

//Get user profile
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;
