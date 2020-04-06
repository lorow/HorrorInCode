import { combineReducers } from 'redux';
import { PageReducer } from './pageReducer';
import { BlogReducer } from './blogReducer';
import { ProjectReducer } from './projectReducer';

export default combineReducers({
  pageInfo: PageReducer,
  blog: BlogReducer,
  projects: ProjectReducer,
})