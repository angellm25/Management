const RoomType = require('../model/roomTypeModel');

class roomTypeService {

    async getRoomTypes() {  
        return await RoomType.find({})
    }

    async addRoomType(data) {  
        return await RoomType.create(data)
    }
}

module.exports = roomTypeService()