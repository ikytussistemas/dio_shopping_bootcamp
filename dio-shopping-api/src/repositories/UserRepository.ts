import { compare, genSalt, hash } from "bcrypt";

import { User } from "../models/User";
import { UserType } from "../models/types";
import {
  UnprocessableError,
  DatabaseError,
  ConflictError,
} from "../models/errors/errosTypes";

class UserRepository {
  async findAll(): Promise<any> {
    try {
      const users = await User.find();

      return users;
    } catch (error) {
      throw new Error();
    }
  }

  async findById(id: string) {
    try {
      const user = await User.findById(id);
      console.log(user?.id);
      return !user ? null : user;
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao buscar usuário por id!",
        data: error,
      });
    }
  }

  async create(user: UserType): Promise<UserType> {
    const { userName, fullName, password, email, type } = user;

    if (!userName || !password || !email) {
      throw new UnprocessableError({
        log: "Por favor Preencha todos os dados obrigatórios!",
      });
    }

    const userExisistes = await User.findOne({ email: email });

    if (userExisistes) {
      throw new ConflictError({ log: "E-mail não disponível para uso!" });
    }

    const salt = await genSalt(12);
    const passwordHash = await hash(password, salt);
    try {
      const user = await User.create({
        userName,
        fullName,
        email,
        password: passwordHash,
        type,
      });
      return user;
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao registrar o usuário",
        data: error,
      });
    }
  }

  async update(user: UserType): Promise<void> {
    try {
      await User.updateOne(user);
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao tentar atualizar o usuário",
        data: error,
      });
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removeUser = await User.deleteOne({ _id: id });
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao tentar remover o usuário",
        data: error,
      });
    }
  }

  async findByUsernameAndPassword(userName: string, password: string) {
    const salt = await genSalt(12);
    const passwordHash = await hash(password, salt);
    try {
      const user = await User.findOne({ userName });

      if (!user) {
        throw new DatabaseError({ log: "Usuário ou senha incorreto!" });
      }
      const checkPassword = await compare(password, user?.password);

      if (!checkPassword) {
        throw new DatabaseError({ log: "Usuário ou senha incorreto!" });
      }

      return !user ? null : user;
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao buscar usuário por username e password",
        data: error,
      });
    }
  }

  async removeAll(): Promise<void> {
    try {
      return await User.remove();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserRepository();
