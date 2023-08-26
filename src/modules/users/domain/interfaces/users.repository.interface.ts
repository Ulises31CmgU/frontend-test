import { AsyncApiResponse } from "../../../../shared/types/response.types";
import { UsersGetListResponseData } from "../entities/users.entities";

export default interface UsersRepositoryInterface {
  getList(): AsyncApiResponse<UsersGetListResponseData>;
}
