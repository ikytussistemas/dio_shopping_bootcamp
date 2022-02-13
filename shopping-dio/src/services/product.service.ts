import API from "./api"

const Resource = '/products'

class ProductService {
    
    async findAll(){
        const { data } = await API.get(Resource);
        return data;
    }

    async delete(id: string){
        const deleteFile = await API.delete(`${Resource}/${id}`)
    }

}

export default new ProductService();

