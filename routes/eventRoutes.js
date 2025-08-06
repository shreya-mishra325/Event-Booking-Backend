const express = require('express');
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/eventController');
const {auth} = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getEvents);

router.post('/', auth('admin'), createEvent);
router.put('/:id', auth('admin'), updateEvent);
router.delete('/:id', auth('admin'), deleteEvent);

module.exports = router;
