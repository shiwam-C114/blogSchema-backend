const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    Name:String
})

module.exports = categorySchema