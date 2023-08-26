import { QueryData } from "../../../../shared/types/response.types";

export type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UsersGetListResponseData = QueryData<UserData>;
