/*eslint-disable */
import endpoints from "./api";
import axios from "axios";
const AxiosManager = axios.create({
  baseURL: `https://staging-api.astrotak.com/api/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization":`Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4ODA5NzY1MTkxIiwiUm9sZXMiOltdLCJleHAiOjE2NzY0NjE0NzEsImlhdCI6MTY0NDkyNTQ3MX0.EVAhZLNeuKd7e7BstsGW5lYEtggbSfLD_aKqGFLpidgL7UHZTBues0MUQR8sqMD1267V4Y_VheBHpxwKWKA3lQ`
  },
});
export const API = {};
const ADDFUN = (endPoint) => {
  return async (data) => {
    const response = await AxiosManager.post(endPoint, data);
    return response
  };
};

const DELETEFUN = (endpoint) => {
  return async (id) => {
    const response = await AxiosManager.post(endpoint + id);
    return response
  };
};
const UPDATEFUN = (endpoint) => {
  return async (id, data) => {
    console.log(id)
    const response = await AxiosManager.post(endpoint + id, data);
    return response;
  };
};
const GET = (endPoint) => {
  return async ({id, query}) => {
    let response;
    if (id) {
      response = await AxiosManager(endPoint + id);
    } else if (query) {
      response = await AxiosManager(endPoint + query);
    } else {
      response = await AxiosManager(endPoint);
    }
    return response.data;
  };
};

(async () => {
  endpoints.forEach((element) => {
    const { functionName, method, path } = element;
    const METORD =
      method === "post"
        ? ADDFUN(path)
        : method === "get"
        ? GET(path)
        : method === "put"
        ? UPDATEFUN(path)
        : DELETEFUN(path);
    API[functionName] = METORD;
  });
})();
