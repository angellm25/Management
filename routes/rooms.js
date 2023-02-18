const express = require("express");
const router = express.Router();
const RoomController= require('../controllers/roomController');


router.post('/', RoomController.addRoom)
router.get('/', RoomController.getRoom)
router.delete('/:id', RoomController.deleteRoom)
router.patch('/:id', RoomController.updateRoom)
router.get('/:id', RoomController.getroomId)

module.exports = router