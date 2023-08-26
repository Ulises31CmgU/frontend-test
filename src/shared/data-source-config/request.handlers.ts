import axios from "axios";
import { PostPutRequest, RequestProps } from "../types/requests.types";
import { ApiResponse, AsyncApiResponse } from "../types/response.types";

export const sendRequest = async <T>(
  props: RequestProps
): AsyncApiResponse<T> => {
  let response: ApiResponse<T>;
  switch (props.requestType) {
    case "get":
      response = await axios.get(props.request.path, props.config);
      break;
    case "delete":
      response = await axios.delete(props.request.path, props.config);
      break;
    case "post":
      response = await axios.post(
        props.request.path,
        (props.request as PostPutRequest).body,
        props.config
      );
      break;
    default: //put
      response = await axios.put(
        props.request.path,
        (props.request as PostPutRequest).body,
        props.config
      );
      break;
  }
  return response;
};
