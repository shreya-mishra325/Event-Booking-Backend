app.get('/', (req,res) => {
    res.send('hello world');
});

app.post('/api/bookings', async (req,res) => {
    try {
        const bookings = await Booking.create(req.body);
        res.status(200).json(bookings);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/bookings', async (req,res) => {
    try {
        const bookings = await Booking.find({});
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get('/api/booking/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const bookings = await Booking.findById(id);
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put('/api/booking/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByIdAndUpdate(id, req.body);
        if(!booking){
            return res.status(404).json({message: "Booking not found!"});
        }
        const updatedData = await Booking.findById(id);
        res.status(200).json(updatedData); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});