const mongoose = require('mongoose');

//schema
const Restaurant = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    name: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
    },
    img: {
        type: String,
    },

});

module.exports = mongoose.model('Restaurant', Restaurant);