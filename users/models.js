'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
    displayname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    reviews: {type: mongoose.Schema.Types.ObjectId, ref: 'Reviews'}
});

UserSchema.methods.serialize = function () {
    return {
        id: this._id || '',
        displayname: this.displayname || '',
        username: this.username || '',
        reviews: this.reviews || ''
    };
};

UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function (password) {
    return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', UserSchema);

module.exports = { User };