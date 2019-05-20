'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const { Review } = require('./models');
const { User } = require('../users/models');
const passport = require('passport');
const router = express.Router();
const jsonParser = bodyParser.json();

const jwtAuth = passport.authenticate('jwt', { session: false });


//view all reviews
router.get('/all', (req, res) => {
    return Review.find()
        .sort('-createdAt')
        .populate('reviewer', 'displayname')
        .then(review => res.status(200).json(review))
        .catch(err => res.status(500).json({message: 'Internal server error'}));
});

//view all reviews written by specific user
router.get('/user/:id', (req, res) => {
    console.log('triggered the route', req.params.id);
    return Review.find({ 'reviewer': req.params.id })
        .sort('-createdAt')
        .populate('reviewer', 'displayname')
        .then(review => res.status(200).json(review))
        .catch(err => res.status(500).json({message: 'Internal server error'}));
});

//view all reviews for a single movie
router.get('/movie/:id', (req, res) => {
    console.log('triggered the route', req.params.id);
    return Review.find({ 'movieId': req.params.id })
        .sort('-createdAt')
        .populate('reviewer', 'displayname')
        .then(review => res.status(200).json(review))
        .catch(err => res.status(500).json({message: 'Internal server error'}));
});

//view a single review by reviewer
router.get('/single/:id', (req, res) => {
    console.log(req.params.id);
    return Review.findOne({_id: req.params.id})
        .populate('reviewer', 'displayname')
        .then(function (review) {
            res.status(200).json(review);
        })
        .catch(err => res.status(500).json({message: err}));
});

//make a new review where id is the id the is the id of the movie being reviewed
router.post('/:id', [jsonParser, jwtAuth], (req, res) => {
    console.log(req.user.username);
    User.findOne({ username: req.user.username})
        .populate('reviewer', 'displayname')
        .then(user => {
            console.log(req.body);
            const {title, genre_ids, poster_path, reviewTitle, reviewText, reviewScore} = req.body;
            Review.create({
                movieId: req.params.id,
                title: title,
                genre_ids: genre_ids,
                poster_path: poster_path,
                reviewer: user,
                reviewTitle: reviewTitle,
                reviewText: reviewText,
                reviewScore: reviewScore
            })
            .then(review => {
                return res.status(201).json(review);
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({message: 'Internal server error'});
            });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({message: 'Internal server error'});
        });
});

//navigating from user profile, where id is the unique id of the review, not the movie
router.put('/update/:id', [jsonParser, jwtAuth], (req, res) => {
    Review.findOneAndUpdate({'_id' : req.params.id},
        { $set: { ...req.body } }, { new: true })
        .then(review => {
            console.log(review);
            res.status(203).json(review);
        })
        .catch(err => res.status(500).json({message: err}));
});

//delete a review where id is the id of the review
router.delete('/delete/:id', jwtAuth, (req, res) => {
    Review.findByIdAndRemove(req.params.id)
        .then(review => {
            console.log(review);
            res.status(204).json(review);
        })
        .catch(err => {
            console.error(4, err);
            res.status(500).json({ message: "Internal server error" });
        });
});

module.exports = { router };