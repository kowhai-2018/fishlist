import { combineReducers } from 'redux'

import auth from './auth'
import fish from './fish'
import info from './info'

export default combineReducers({
  auth,
  fish,
  info
})
