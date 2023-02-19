const express = require("express");
const router = express.Router();
const RoomController= require('../controllers/roomController');


router.post('/api/v1/rooms', RoomController.addRoom)
router.get('/api/v1/rooms?search={searchRoomNameMatch}&roomType={searchRoomTypeNameMatch}&minPrice={searchRoomMinimumPriceMatch}&maxPrice={searchRoomMaximumPriceMatch}', RoomController.getRooms)
router.delete('/api/v1/rooms/{roomId}', RoomController.deleteRoom)
router.patch('/api/v1/rooms/{roomId}', RoomController.updateRoom)
router.get('/api/v1/rooms/{roomId}', RoomController.getroomId)

module.exports = router