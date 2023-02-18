const roomService = require('../services/room.service');

class RoomController{
    
    async addRoom(req, res) {  
        const body = req.body

        const existingRoom = await roomService.getRoom({title: body.title.toLowerCase()})
        if(existingRoom) return res.status(403).json({
            success: false,
            message: 'Room already exists'
        })

        const createdRoom = await roomService.addRoom(body)


        return res.status(201).json({
            success: true,
            message: 'Room Created Successfully',
            data: createdRoom
        })
    }
    
    async updateRoom(req, res) {  
        const Updatedata = req.body
        const roomId = req.params.id 

        const existingRoom = await roomService.getRoom({title: body.title.toLowerCase()})
        if(!existingRoom) return res.status(402).json({
            success: false,
            message: 'Room not found'
        })

        const createdRoom = await roomService.addRoom(body)


        return res.status(201).json({
            success: true,
            message: 'Room Created Successfully',
            data: createdRoom
        })
    }
    
}