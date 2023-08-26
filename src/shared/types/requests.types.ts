import { AxiosRequestConfig } from "axios";

type BaseRequest = {
  path: string;
};

export type RequestProps = {
  requestType: "get" | "post" | "put" | "delete";
  request: GetRequest | PostPutRequest | DeleteRequest;
  config?: AxiosRequestConfig;
};

export interface GetRequest extends BaseRequest {
  query?: string;
}

export interface PostPutRequest extends BaseRequest {
  body: Object;
}

export interface DeleteRequest extends BaseRequest {}
