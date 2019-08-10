import axios from "axios";

export default ({
  uri,
  method,
  params = null,
  data = null,
  headers = null
}) => {
  return axios({
    baseURL: process.env.SERVICE_URL,
    url: `/api${uri}`,
    method: method,
    params: params,
    data: data,
    headers: headers
  });
};
