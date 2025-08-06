const express = require('express');
const {bookEvent, cancelBooking} = require('../controllers/bookingController');
const {auth} = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/:eventId', auth(), bookEvent);
router.delete('/:eventId', auth(), cancelBooking);

module.exports = router;