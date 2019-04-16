import axios from 'axios';
import T from '../enums/ActionTypes';

axios.defaults.baseURL = 'https://api-magaburguer.herokuapp.com/';


export function ObtemTodosIngredientes() {
  return (dispatch) => {
    dispatch({ type: T.FETCH_ALL });
    axios
      .get('/api/ingredientes')
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
