const mongoose = require('mongoose');
const roomTypeController = require('../controllers/roomTypeController');


const roomtypeSchema = new mongoose.Schema (
  {
    name : {
      type: String
    }
  }
)

module.exports = mongoose.model("roomtype", roomtypeSchema);

module.exports = roomTypeModel