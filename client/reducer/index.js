import { combineReducers } from 'redux'

import auth from './auth'
import fish from './fish'
import info from './info'
import sort from './sort'
import fishDetails from './fishDetails'

export default combineReducers({
  auth,
  fish,
  fishDetails,
  info,
  sort
})
