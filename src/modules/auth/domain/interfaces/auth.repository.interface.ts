import { AsyncApiResponse } from "../../../../shared/types/response.types";
import {
  AuthLoginRequestData,
  AuthLoginResponseData,
} from "../entities/auth.entities";

export default interface AuthRepositoryInterface {
  login(data: AuthLoginRequestData): AsyncApiResponse<AuthLoginResponseData>;
}
