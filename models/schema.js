const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema ({
    name:{
        type: String,
        required: [true, "Please Enter Your Name"]
    },
    date: {
        type: Date,
        required: [true, "Enter date"]
    },
    location: {
        type: String,
        required: [true, "Enter Valid Location"]
    },
    capacity: {
        type: Number,
        required: false
    }
},
{
    timestamps: true
}
);

const Booking = mongoose.model("Event", BookingSchema);
module.exports = Booking;