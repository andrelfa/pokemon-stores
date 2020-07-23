import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import counter from './reducers/counter'

const reducer = combineReducers({
  counter
})

const store = configureStore({
  reducer
})
export default store;