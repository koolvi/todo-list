import { mergeDeepRight } from 'ramda';
import * as actionTypes from './actionTypes';

const initialState = {
  login: '',
  password: '',
  errors: {
    hasErrorLogin: false,
    hasErrorPassword: false,
    errorTextLogin: 'Поле: ИМЯ ПОЛЬЗОВАТЕЛЯ - не заполнено!',
    errorTextPassword: 'Поле: ПАРОЛЬ - не заполнено!',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN: return {
      ...state,
      login: action.payload,
    };
    case actionTypes.CHANGE_PASSWORD: return {
      ...state,
      password: action.payload,
    };
    case actionTypes.ERROR_LOGIN:
      return mergeDeepRight(state, { errors: { hasErrorLogin: action.payload } });
      // второй способ, того что выше
      // return {
      //   ...state,
      //   errors: {
      //     ...state.errors,
      //     hasErrorLogin: true,
      //   },
      // };
    case actionTypes.ERROR_PASSWORD:
      return mergeDeepRight(state, { errors: { hasErrorPassword: action.payload } });

    default: return state;
  }
};
