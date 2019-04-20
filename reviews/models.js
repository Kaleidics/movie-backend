'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ReviewSchema = mongoose.Schema({
    reviewer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    reviewTitle: String,
    reviewText: String,
    reviewScore: Number
    
});

ReviewSchema.methods.serialize = function () {
    return {
        reviewer: this.Reviewer || '',
        reviewTitle: this.reviewTitle || '',
        reviewTest: this.reviewText || '',
        reviewScore: this.reviewScore || '',
        
    };
};

const Review = mongoose.model('Review', ReviewSchema);

module.exports = { Review };