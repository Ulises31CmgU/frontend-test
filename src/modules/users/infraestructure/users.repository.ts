import UsersRepositoryInterface from "../domain/interfaces/users.repository.interface";

import { sendRequest } from "../../../shared/data-source-config/request.handlers";

import { UsersGetListResponseData } from "../domain/entities/users.entities";
import { RequestProps } from "../../../shared/types/requests.types";

import { API_URL } from "../../../shared/data-source-config/apis";
import { AsyncApiResponse } from "../../../shared/types/response.types";

const urls = {
  login: `${API_URL}/users`,
};

export default class UsersRepository implements UsersRepositoryInterface {
  async getList(): AsyncApiResponse<UsersGetListResponseData> {
    const request: RequestProps = {
      requestType: "get",
      request: {
        path: urls.login,
      },
    };
    return await sendRequest<UsersGetListResponseData>(request);
  }
}
