const express = require("express");
const router = express.Router();
const RoomTypeController= require('../controllers/roomTypeController');


router.post('/', RoomTypeController.addRoom)
router.get('/', RoomTypeController.getRoom)

module.exports = router