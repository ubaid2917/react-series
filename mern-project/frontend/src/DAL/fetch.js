import { invokeApi } from "../utils/invokeApi";

export const getUserList = async () => {
  const reqObj = {
    path: `/sample/get`,
    method: "GET",
    headers: {},
  };
  return invokeApi(reqObj);
};
export const addUser = async (data) => {
  const reqObj = {
    path: `/sample/add`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    postData: data,
  };
  return invokeApi(reqObj);
};