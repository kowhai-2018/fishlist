import { combineReducers } from 'redux'

import fish from './fish'
import info from './info'
import search from './search'

export default combineReducers({
  fish,
  info,
  search
})
