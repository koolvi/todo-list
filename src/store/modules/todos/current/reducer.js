import * as actionTypes from './actionTypes';

const initialState = {
  data: null,
  hasErrorText: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD: return {
      ...state,
      data: {
        ...state.data,
        [action.field]: action.payload,
      },
    };
    case actionTypes.SET_DATA: return {
      ...state,
      data: {
        id: action.payload.id,
        completed: action.payload.completed,
        text: action.payload.text,
        price: action.payload.price,
        category: action.payload.category,
      },
    };
    case actionTypes.RESET: return initialState;

    default: return state;
  }
};
