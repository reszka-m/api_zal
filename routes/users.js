const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//zwraca wszystkie filmy
router.get('/', async (req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message: err})
    }
});

//wysyła film
router.post('/', async (req,res) => {
    const user = new User({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email: req.body.email,
        age: req.body.age
    });
    try{
        const savedUser = await user.save();
    res.json(savedUser);
    }catch(err){
        res.json({message: err})
    }
    
    
});

//zwraca konkretny film
router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
    res.json(user);
    }catch(err){
        res.json(err);
    }
    
});

//usuwanie filmu
router.delete('/:userId', async (req, res) => {
    try{
        const removedUser = await User.remove({_id: req.params.userId});
        res.json(removedUser);
    }catch(err){
        res.json(err);
    }
    
});

//update filmu
router.patch('/:userId', async (req, res) => {
    try{
        const updatedUser = await User.updateOne({_id: req.params.userId}, {$set: 
            {
                firstName: req.body.firstName,
                secondName: req.body.secondName,
                email: req.body.email,
                age: req.body.age
            },
        });
        res.json(updatedUser);
    }catch(err){
        res.json(err);
    }
    
});




module.exports = router;