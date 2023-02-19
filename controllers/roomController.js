const { deleteRoom } = require('../services/room.service');
const roomService = require('../services/room.service');

class RoomController{
    async addRoom(req, res) {
        const body = req.body
        const existingRoom = await roomType.getRoom({title: body.title.toLowerCse()})
        if(existingRoom) return res.status(404).send({success: false, message: "Room already exists",})

        const CreatedRoom = await roomService.addRoom(body)
        return res.satus(200).send({success: true, message: "Room created successfully", data: CreatedRoom})
    }

    async getRoomId(req, res){
        const RoomId = req.params.id
        const RoomToFetch = await roomService.getroomId({_id: RoomId})

        if(!RoomToFetch) return res.status(400).send({success: false, message: "Room not found!"})
        return res.status(200).send({success: true, message:"Room fetched successfully", data: RoomToFetch})
    }

    // async getRoom(req, res){
    //     const Room = req.params.filter
    //     const RoomToFetch = await roomService.getroom({})

    //     if(!RoomToFetch) return res.status(400).send({success: false, message: "Room not found!"})
    //     return res.status(200).send({success: true, message:"Room fetched successfully", data: RoomToFetch})
    // }

    async updateRoom(req, res) {
        const Updatedata = req.body
        const RoomId = req.params.id

        const existingRoom = await roomService.getroomId({_id: RoomId})
        if(!existingRoom) return res.status(404).send({success:false, message: "Book not found"})

        if(Updatedata.title){
            const existingRoomTitle = await roomService.getroomId({title: Updatedata.title.toLowerCse()})
            if(existingRoomTitle){
                if(existingRoomTitle._id.toString()  !==RoomId) {return res.status(402).send({success: false, message:"The Room already exists"})}

            }
        }

        const updatedRoom = await roomService.updateRoom(RoomId, Updatedata)
        return res.status(200).send({success: true, message:"Room Updated Successfully", data: updatedRoom})
    }

    async deleteRoom(req, res){
        const RoomId = req.params.id 
        const RoomToFetch = await roomService.getroomId({_id: RoomId})

        if(!RoomToFetch) return res.status(405).send({success: false, message: " Room not found"})
        await roomService.deleteRoom(RoomId) 
        return  res.status(200).send({success: true, message: "Room Deleted", data:RoomToFetch})
    }
}

module.exports = RoomController()