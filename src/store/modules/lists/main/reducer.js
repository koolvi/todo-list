import * as actionTypes from './actionTypes';

const initialState = {
  lists: [],
  selectedList: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LISTS: return {
      ...state,
      lists: action.payload,
    };
    case actionTypes.SET_SELECTED_LIST: return {
      ...state,
      selectedList: action.payload,
    };
    default: return state;
  }
};
