import AuthRepositoryInterface from "../domain/interfaces/auth.repository.interface";

import { sendRequest } from "../../../shared/data-source-config/request.handlers";

import {
  AuthLoginRequestData,
  AuthLoginResponseData,
} from "../domain/entities/auth.entities";
import { RequestProps } from "../../../shared/types/requests.types";

import { API_URL } from "../../../shared/data-source-config/apis";
import { AsyncApiResponse } from "../../../shared/types/response.types";

const urls = {
  login: `${API_URL}/login`,
};

export default class AuthRepository implements AuthRepositoryInterface {
  async login(
    data: AuthLoginRequestData
  ): AsyncApiResponse<AuthLoginResponseData> {
    const request: RequestProps = {
      requestType: "post",
      request: {
        path: urls.login,
        body: data,
      },
    };
    return await sendRequest<AuthLoginResponseData>(request);
  }
}
