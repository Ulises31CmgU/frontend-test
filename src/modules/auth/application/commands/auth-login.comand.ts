import AuthRepositoryInterface from "../../domain/interfaces/auth.repository.interface";
import { AuthLoginRequestData } from "../../domain/entities/auth.entities";

export const AuthLoginCommand = (
  repository: AuthRepositoryInterface,
  data: AuthLoginRequestData
) => {
  return repository.login(data);
};
