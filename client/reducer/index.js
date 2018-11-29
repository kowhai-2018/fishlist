import { combineReducers } from 'redux'

import auth from './auth'
import fish from './fish'
import info from './info'
import sort from './sort'

export default combineReducers({
  auth,
  fish,
  info,
  sort
})
