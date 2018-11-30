import {combineReducers} from 'redux'

import auth from './auth'
import fish from './fish'
import info from './info'
import search from './search'
import sort from './sort'
import fishDetails from './fishDetails'

export default combineReducers({
  auth,
  fish,
  info,
  search,
  fishDetails,
  sort
})
