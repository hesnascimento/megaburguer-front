import axios from 'axios';
import T from '../enums/IngredientesActionTypes';
import urlconf from '../../urlconf'

axios.defaults.baseURL = urlconf;


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
