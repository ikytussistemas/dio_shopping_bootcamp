import API from "./api"
import { MessageType } from '../types/MessageType';

const Resource = '/messages'

class MessageService {

    async create(message: MessageType) {
        const newMessage = await API.post(Resource, message)
        return newMessage;
    }
    
    async findAll(){
        const { data } = await API.get(Resource);
        return data;
    }

    async delete(id: string){
        const deleteFile = await API.delete(`${Resource}/${id}`)
    }

}

export default new MessageService();

