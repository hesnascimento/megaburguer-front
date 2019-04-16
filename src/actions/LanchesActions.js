import axios from 'axios';
import T from '../enums/LanchesActionTypes';

axios.defaults.baseURL = "https://api-megaburguer.herokuapp.com/";

export function ObtemTodosLanches() {
  return (dispatch) => {
    dispatch({ type: T.FETCH_ALL });
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

export function Feito() {
  return { type: T.DONE };
}
