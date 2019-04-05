import { combineReducers } from 'redux';
import main from './main/reducer';
import current from './current/reducer';

export default combineReducers({
  main,
  current,
});
