'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ReviewSchema = mongoose.Schema({
    movieId: {
        type: Number,
        required: true
    },
    title: String,
    genre_ids: Array,
    poster_path: String,
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
        title: this.title || '',
        genre_ids: this.genre_ids || '',
        poster_path: this.poster_path || '',
        reviewer: this.Reviewer || '',
        reviewTitle: this.reviewTitle || '',
        reviewTest: this.reviewText || '',
        reviewScore: this.reviewScore || '',
    };
};

const Review = mongoose.model('Review', ReviewSchema);

module.exports = { Review };