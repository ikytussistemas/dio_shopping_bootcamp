import { Message } from "../models/Message";
import { MessageType } from "../models/types";
import {
  UnprocessableError,
  DatabaseError,
  ConflictError,
} from "../models/errors/errosTypes";

class MessageRepository {
  async findAll(): Promise<any> {
    try {
      const messages = await Message.find();
      return messages;
    } catch (error) {
      throw new Error();
    }
  }

  async findById(id: string) {
    try {
      const message = await Message.findById(id);
      return !message ? null : message;
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao buscar mensagem por id!",
        data: error,
      });
    }
  }

  async create(user: MessageType): Promise<MessageType> {
    const { email, message } = user;

    if (!email || !message) {
      throw new UnprocessableError({
        log: "Por favor Preencha todos os dados obrigatórios!",
      });
    }

    try {
      const newMessage = await Message.create({
        email,
        message,
      });
      return newMessage;
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao registrar a mensagem",
        data: error,
      });
    }
  }

  async update(message: MessageType): Promise<void> {
    try {
      await Message.updateOne(message);
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao tentar atualizar a mensagem",
        data: error,
      });
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removeMessage = await Message.deleteOne({ _id: id });
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao tentar remover a mensagem",
        data: error,
      });
    }
  }

  async removeAll(): Promise<void> {
    try {
      return await Message.remove();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MessageRepository();
