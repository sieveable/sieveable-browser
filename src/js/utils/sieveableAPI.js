import * as axios from "axios";
import {appConstants} from "./constants";

const rootUrl = "http://" + appConstants.SERVER_HOST + ":" + appConstants.SERVER_PORT + "/q/json";

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
