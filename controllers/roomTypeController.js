const roomTypeService = require('../services/roomType.service');

class RoomTypeController{

async addRoomType(req, res) {  
    const body = req.body

    const existingRoomType = await roomTypeService.getRoomTypes({title: body.title.toLowerCase()})
    if(existingRoomType) return res.status(403).json({
        success: false,
        message: 'RoomType already exists'
    })

    const createdRoomType = await roomTypeService.addRoomType(body)


    return res.status(201).json({
        success: true,
        message: 'Room Type Created Successfully',
        data: createdRoomType
    })
}

}