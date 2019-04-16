import axios from 'axios';
import T from '../enums/LancheActionTypes';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost';
} else {
  axios.defaults.baseURL = 'https://api-magaburguer.herokuapp.com/';
}


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