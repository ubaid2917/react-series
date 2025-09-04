import { invokeApi } from "../utils/invokeApi";

export const getUserList = async () => {
  const reqObj = {
    path: `/sample/get`,
    method: "GET",
    headers: {},
  };
  return invokeApi(reqObj);
};