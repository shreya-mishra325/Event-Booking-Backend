const Booking = require('../models/Booking');
const Event = require('../models/schema');

exports.viewBooking = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate('event');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
exports.bookEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });
    if (event.bookedSlots >= event.capacity) return res.status(400).json({ message: "No seats left" });

    const exists = await Booking.findOne({ user: req.user._id, event: event._id });
    if (exists) return res.status(400).json({ message: "Already booked" });

    await Booking.create({ user: req.user._id, event: event._id });
    event.bookedSlots = (event.bookedSlots || 0) + 1;
    await event.save();

    res.status(201).json({ message: "Booking successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOneAndDelete({ user: req.user._id, event: req.params.eventId });
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    const event = await Event.findById(req.params.eventId);
    if (event && event.bookedSlots > 0) {
      event.bookedSlots--;
      await event.save();
    }

    res.json({ message: "Booking cancelled" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
