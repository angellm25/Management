
const Room = require('../models/roomModel');

class roomService {

    //add room 
    async addRoom(data) {  
        return await Room.create(data)
    }
    
    // get single room
    async getRooms(filter) {  
        return await Room.findOne(filter)
            }
    


    // get room by its id
   async getroomId(id) {
    return await Room.findOne({ _id: id})
   }

    async updateRoom(id, Updatedata){
       return await Room.findByIdAndUpdate(id, Updatedata, {new: true})
    }

    async deleteRoom(id){
        return await Room.findOneAndDelete({_id: id})
    }

}
module.exports =  new roomService()