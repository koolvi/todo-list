import * as actionTypes from './actionTypes';

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TODOS_LIST: return {
      ...state,
      todos: action.payload,
    };
    default: return state;
  }
};
