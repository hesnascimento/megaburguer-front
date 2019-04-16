import axios from 'axios';
import T from '../enums/LancheActionTypes';
import urlconf from '../urlconf'

axios.defaults.baseURL = urlconf;

export function ObtemTodosLanches() {
  return (dispatch) => {
    dispatch({ type: T.FETCH });
    axios
      .get('/api/lanches')
      .then((request) => {
        dispatch({ type: T.FETCHED, payload: request.data });
      })
      .catch((err) => {
        dispatch({ type: T.ERROR, payload: err });
      });
  };
}

export function cancelar() {
  return (dispatch) => {
    dispatch({ type: T.CLEAR });
  }
}

export function enviaLanche(lanche) {
  return (dispatch) => {
    dispatch({ type: T.FETCH });
    axios
      .post('/api/lanches', lanche)
      .then((request) => {
        dispatch({ type: T.FETCHED, payload: request.data });
      })
      .catch((err) => {
        dispatch({ type: T.ERROR, payload: err });
      });
  }
}

export function adicionaItem(item) {
  return (dispatch) => {
    dispatch({ type: T.INCLUDE_ITEM, payload: item });
  }
}

export function removeItem(item) {
  return (dispatch) => {
    dispatch({ type: T.REMOVE_ITEM, payload: item });
  }
}

export function selecionar(lanche) {
  return (dispatch) => {
    dispatch({ type: T.SELECT, payload: lanche });
  }
}

export function Feito() {
  return (dispatch) => {
    dispatch({ type: T.DONE });
  }
}
