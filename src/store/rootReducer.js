import { combineReducers } from 'redux';
import authReducer from './modules/auth/reducer';
import listsReducer from './modules/lists/reducer';
import todosReducer from './modules/todos/reducer';
import categoriesReducer from './modules/categories/reducer';


export default combineReducers({
  auth: authReducer,
  lists: listsReducer,
  todos: todosReducer,
  categories: categoriesReducer,
});
