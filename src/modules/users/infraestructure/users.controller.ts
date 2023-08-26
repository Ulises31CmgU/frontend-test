import UsersRepository from "./users.repository";

import { UsersGetAllQuery } from "../application/queries/users.get-list.query";

const userRepository = new UsersRepository();

export class UsersController {
  static async getList() {
    return await UsersGetAllQuery(userRepository);
  }
}
