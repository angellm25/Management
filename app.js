const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const RoomType = require('./routes/roomType');
const Room = require('./routes/rooms');
const database = require('./database');
const PORT = process.env.PORT || 4111
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/v1', Roomtype)
app.use('/api/v1', Rooms)


app.listen(PORT, console.log('Server is listening on port ' + PORT))