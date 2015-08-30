import * as axios from "axios";

const rootUrl = "http://localhost:3000/q/json";

export function get(queryText) {
  var params = {
    queryText
  };
  return axios.get(rootUrl, {
      params
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Request failed. Reason: ", error);
    });
}
