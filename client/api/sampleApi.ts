import request from "./request";

export default () => {
  return request({
    method: "get",
    uri: "sample/api"
  });
};
