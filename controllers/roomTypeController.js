const roomTypeService = require('../services/roomType.service');

class RoomTypeController {

    async addRoomType(req, res) {

        const body = req.body

        const existingRoomtype = await roomTypeService.getRoomtypes({})
        if(existingRoomtype) return res.status(404).send({success: false, message: "Roomtype already exists",})

        const CreatedRoomType = await roomTypeService.addRoomType(body)
        return res.satus(200).send({success: true, message: "Roomtype created successfully", data: CreatedRoomType})
    }


    async getRoomTypes(req, res) {
        const allRoomtypes = await roomTypeService.getRoomtypes()
        return res.status(200).send({success: true, message: "Roomtypes fetched sucessfully", data: allRoomtypes})
    }
}


module.exports = RoomTypeController()