const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    Title: String,
    Body: String,
    Author: String,
    Categories: [{ Category_id: ObjectIds(), Category_name: String }],
    Comments: [
        {
            User_id: ObjectId(),
            Message: String,
        },
    ],
    Likes: [
        {
            User_id: ObjectId(),
        },
    ],
});


module.exports = blogSchema
