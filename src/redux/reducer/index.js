import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import reducerAuth from './reducerAuth';
import reducerModal from './reducerModal';

const appReducers = (history) =>
  combineReducers({
      auth:reducerAuth,
      modal:reducerModal,
      router: connectRouter(history),
      
  });


export default appReducers;