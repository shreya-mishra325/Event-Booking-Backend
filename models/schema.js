const mongoose = require('mongoose');

const EventSchema = mongoose.Schema ({
    name:{
        type: String,
        required: [true, "Enter Event Name"]
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

const Booking = mongoose.model("Event", EventSchema);
module.exports = Booking;