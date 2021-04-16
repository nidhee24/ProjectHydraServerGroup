const mongoose = require('mongoose');

//schema
const FlightsBooking = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    flight_name: {
        type: String,
        required: true,
    },
    departure_arrival: {
        type: String,
    },
    price: {
        type: String,
    },

});

module.exports = mongoose.model('FlightsBooking', FlightsBooking);