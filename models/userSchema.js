const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    social_profile: {
        linkedIn: String,
        facebook: String,
        Twiter: String,
        Github: String,
        Instagram: String,
    },
    Addresses: [
        {
            Line1: String,
            City: String,
            State: String,
            PinCode: Number,
        },
    ],
    Blogs_id: [ObjectId()],
});

module.exports = userSchema
