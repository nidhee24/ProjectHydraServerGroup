const mongoose = require('mongoose');

//schema
const Blog = new mongoose.Schema({
   
    title: {
        type: String,
        required: true,
    },
    blog: {
        type: String,
    },
    img: {
        type: String,
    },

});

module.exports = mongoose.model('Blog', Blog);