import SieveableDispatcher from "../dispatcher/sieveableDispatcher.js";
import {EventEmitter} from "events";
import {appConstants} from "../utils/constants";
import * as api from "../utils/sieveableAPI";
var CHANGE_EVENT = "change";

class SieveableStore extends EventEmitter {
  constructor() {
    super();
    this._store = {
      result: []
    };
  }
  getResult() {
    return this._store.result;
  }
  submitQuery(query) {
    return api.get(query)
      .then(response => {
        this._store.result = response;
        return "done";
      });
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
}

let sieveableStore = new SieveableStore();
export default sieveableStore;

SieveableDispatcher.register((payload) => {
  let action = payload.action;
  switch (action.actionType) {
    case appConstants.SUBMIT_QUERY:
      sieveableStore.submitQuery(action.data)
        .then(response => {
          sieveableStore.emit(CHANGE_EVENT);
        });
      break;
    default:
      break;
  }
});
