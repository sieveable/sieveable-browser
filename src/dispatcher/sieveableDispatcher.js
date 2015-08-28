import {Dispatcher} from "flux";

class SieveableDispatcher extends Dispatcher {
  handleAction(action) {
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    });
  }
}

let _SieveableDispatcher = new SieveableDispatcher();
export default _SieveableDispatcher;
