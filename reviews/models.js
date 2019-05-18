'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ReviewSchema = mongoose.Schema({
    movieId: {
        type: Number,
        required: true
    },
    moviePoster: String,
    reviewer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    reviewTitle: {
        type: String,
        required: true
    },
    reviewText: String,
    reviewScore: {
        type: Number,
        required: true
    }
    
});

ReviewSchema.methods.serialize = function () {
    return {
        movieId: this.movieId || '',
        moviePoster: this.moviePoster || '',
        reviewer: this.Reviewer || '',
        reviewTitle: this.reviewTitle || '',
        reviewTest: this.reviewText || '',
        reviewScore: this.reviewScore || '',
    };
};

const Review = mongoose.model('Review', ReviewSchema);

module.exports = { Review };