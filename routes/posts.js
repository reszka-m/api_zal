const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

//zwraca wszystkie posty
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err})
    }
});

//wysyła post
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err})
    }
    
    
});

//zwraca konkretny post
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json(err);
    }
    
});

//usuwanie posta
router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json(err);
    }
    
});

//update posta
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: 
            {
                title: req.body.title,
                description: req.body.description
            },
        });
        res.json(updatedPost);
    }catch(err){
        res.json(err);
    }
    
});




module.exports = router;