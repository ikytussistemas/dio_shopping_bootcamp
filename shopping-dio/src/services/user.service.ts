import { UserType } from "../types/UserType";
import API from "./api";

const Resource = "/users";

class UserService {
  async findAll() {
    const { data } = await API.get(Resource);
    return data;
  }

  async create(user: UserType) {
    const newUser = await API.post(Resource, user);
    return newUser;
  }

  async delete(id: string) {
    const deleteFile = await API.delete(`${Resource}/${id}`);
  }
}

export default new UserService();
