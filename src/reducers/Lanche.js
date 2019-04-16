import T from '../enums/LancheActionTypes';
import S from '../enums/States';

const initialState = {
  lanche: {},
  valores: {},
  state: S.INITIAL,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case T.FETCH:
      return {
        ...state,
        error: null,
        state: S.FETCHING,
      };
    case T.FETCHED:
      return {
        state: S.FETCHED,
        valores: action.payload,
        error: null,
      };
    case T.ERROR:
      return {
        lanche: [],
        state: S.ERROR,
        error: action.payload,
      };
    case T.DONE:
      return {
        ...state,
        state: S.INITIAL,
      };
    case T.INCLUDE_ITEM:
      const incluir = state.lanche;
      incluir.ingredientes.push(action.payload);
      return {
        ...state,
        state: S.FETCHED,
        lanche: incluir,
      };
    case T.REMOVE_ITEM:
      const remover = state.lanche;
      remover.ingredientes.splice(remover.ingredientes.indexOf(action.payload), 1);
      return {
        ...state,
        state: S.FETCHED,
        lanche: remover,
      };
    case T.SELECT:
      console.log('Oi cara de boi')
      return {
        ...state,
        state: S.FETCHED,
        lanche: action.payload,
      };
    default:
      return state;
  }
};
