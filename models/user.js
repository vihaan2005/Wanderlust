const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
    },
    profilePhoto: {
        type: String,
    }
});

userSchema.plugin(passportLocalMongoose, {
    usernameQueryFields: ['googleId']
});

module.exports = mongoose.model('User', userSchema);