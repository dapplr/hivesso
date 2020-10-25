import { combineReducers } from 'redux'
import * as History from 'history'
import { connectRouter } from 'connected-react-router';

import counter from './counter'
import user from './user'
export const history = History.createBrowserHistory()

export default combineReducers({
  router: connectRouter(history),
  counter,
  user
})
