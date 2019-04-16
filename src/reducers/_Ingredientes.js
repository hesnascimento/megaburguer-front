import T from '../enums/IngredientesActionTypes';
import S from '../enums/States';

const initialState = {
  ingredientes: [],
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
        ingredientes: action.payload,
        error: null,
      };
    case T.ERROR:
      return {
        ingredientes: [],
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
