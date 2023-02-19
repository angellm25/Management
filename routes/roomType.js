const express = require("express");
const router = express.Router();
const RoomTypeController= require('../controllers/roomTypeController');


router.post('/api/v1/rooms-types', RoomTypeController.addRoomType)
router.get('/ap/v1/rooms-types', RoomTypeController.getRoomTypes)

module.exports = router