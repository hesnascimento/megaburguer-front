import T from '../enums/LanchesActionTypes';
import S from '../enums/States';

const initialState = {
  lanches: [],
  state: S.INITIAL,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case T.FETCH_ALL:
      return {
        ...state,
        error: null,
        state: S.FETCHING,
      };
    case T.FETCHED:
      return {
        state: S.FETCHED,
        lanches: action.payload,
        error: null,
      };
    case T.ERROR:
      return {
        lanches: [],
        state: S.ERROR,
        error: action.payload,
      };
    case T.DONE:
      return {
        ...state,
        state: S.INITIAL,
      };
    default:
      return state;
  }
};
