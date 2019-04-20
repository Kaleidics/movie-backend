'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ReviewSchema = mongoose.Schema({
    
});

ReviewSchema.methods.serialize = function () {
    return {
    };
};

const Review = mongoose.model('Review', ReviewSchema);

module.exports = { Review };