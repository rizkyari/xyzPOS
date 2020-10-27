import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import reducerAuth from './reducerAuth';

const appReducers = (history) =>
  combineReducers({
      auth:reducerAuth,
      router: connectRouter(history),
  });


export default appReducers;