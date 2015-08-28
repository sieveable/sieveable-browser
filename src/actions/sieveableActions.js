import SieveableDispatcher from "../dispatcher/sieveableDispatcher";
import {appConstants} from "../utils/constants";

class SieveableActions {
  submitQuery(query) {
    SieveableDispatcher.handleAction({
      actionType: appConstants.SUBMIT_QUERY,
      data: query
    });
  }
}

const instance = new SieveableActions();
export default instance;
