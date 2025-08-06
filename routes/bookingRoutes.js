const express = require('express');
const {bookEvent, cancelBooking, viewBooking} = require('../controllers/bookingController');
const {auth} = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/:eventId', auth(), bookEvent);
router.delete('/:eventId', auth(), cancelBooking);
router.get('/', auth(), viewBooking);

module.exports = router;