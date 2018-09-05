import { combineReducers } from 'redux';
import articles from './articles';
import options from './options';

export default combineReducers({
  articles,
  options
});
