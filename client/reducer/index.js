import { combineReducers } from 'redux'

import fish from './fish'
import info from './info'
import sort from './sort'

export default combineReducers({
  fish,
  info,
  sort
})
