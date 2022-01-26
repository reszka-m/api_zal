const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies.js');

//zwraca wszystkie filmy
router.get('/', async (req,res) => {
    try{
        const movies = await Movie.find();
        res.json(movies);
    }catch(err){
        res.json({message: err})
    }
});

//wysyła film
router.post('/', async (req,res) => {
    const movie = new Movie({
        title: req.body.title,
        releaseDate: req.body.releaseDate,
        director: req.body.director,
        rating: req.body.rating
    });
    try{
        const savedMovie = await movie.save();
    res.json(savedMovie);
    }catch(err){
        res.json({message: err})
    }
    
    
});

//zwraca konkretny film
router.get('/:movieId', async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.movieId);
    res.json(movie);
    }catch(err){
        res.json(err);
    }
    
});

//usuwanie filmu
router.delete('/:movieId', async (req, res) => {
    try{
        const removedMovie = await Movie.remove({_id: req.params.movieId});
        res.json(removedMovie);
    }catch(err){
        res.json(err);
    }
    
});

//update filmu
router.patch('/:movieId', async (req, res) => {
    try{
        const updatedMovie = await Movie.updateOne({_id: req.params.movieId}, {$set: 
            {
                title: req.body.title,
                releaseDate: req.body.releaseDate,
                director: req.body.director,
                rating: req.body.rating
            },
        });
        res.json(updatedMovie);
    }catch(err){
        res.json(err);
    }
    
});




module.exports = router;