import { encode } from "base-64";
import { UserLoginType } from "../types/UserType";
import API from "./api";

const Resource = "/token";

class LoginService {
  async login(user: UserLoginType) {
    const token = encode(`${user.username}:${user.password}`);
    const { data } = await API.post(Resource, "", {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    await this.setToken(data["token"]);

    return data;
  }

  async logoff(){
    localStorage.removeItem("@dio_token")  
  }

  async setToken(token: string) {
    localStorage.setItem("@dio_token", token);
  }

  async getToken() {
      const token = localStorage.getItem("@dio_token")
      if(!token) return null
      return token;
  }
}

export default new LoginService();
