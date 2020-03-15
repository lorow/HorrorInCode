import { combineReducers } from 'redux'
import { PageReducer } from './pageReducer';

export default combineReducers({
  pageInfo: PageReducer,
})