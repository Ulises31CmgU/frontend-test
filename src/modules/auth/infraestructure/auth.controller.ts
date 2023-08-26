import AuthRepository from "./auth.repository";

import { AuthLoginCommand } from "../application/commands/auth-login.comand";

import { AuthLoginRequestData } from "../domain/entities/auth.entities";

const authUserRepository = new AuthRepository();

export class AuthController {
  static async login(data: AuthLoginRequestData) {
    return await AuthLoginCommand(authUserRepository, data);
  }
}
