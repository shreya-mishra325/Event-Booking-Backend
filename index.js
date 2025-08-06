const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const url = process.env.URL;

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/api/auth', authRoutes)
app.use('/api/event', eventRoutes)
app.use('/api/bookings', bookingRoutes)

mongoose.connect(url)
.then(() => {
    console.log('Connected to database!');
})
.catch(() => console.log('Connection failed'));


const port = process.env.PORT;
app.listen(port || 3000, () => console.log(`server running at http://localhost:${port || 3000}`));