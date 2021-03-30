import { combineReducers } from 'redux'
import { counterReducer } from './counter/counter'

const rootReducer = combineReducers({
  counter: counterReducer
})

export default rootReducer