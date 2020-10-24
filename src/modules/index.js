import { combineReducers } from 'redux'
import * as History from 'history'
import { connectRouter } from 'connected-react-router';

import counter from './counter'
export const history = History.createBrowserHistory()

export default combineReducers({
  router: connectRouter(history),
  counter
})
