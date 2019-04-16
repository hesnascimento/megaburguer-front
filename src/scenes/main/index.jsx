import React from 'react';
import { connect } from 'react-redux';

import { ObtemTodosIngredientes } from '../../actions/IngredientesActions'
import { ObtemTodosLanches } from '../../actions/LanchesActions';
import SelecionarLanches from './SelecionarLanche';
import S from '../../enums/States';

function Main(props) {
  if (props.ingredientes.state === S.INITIAL) {
    props.dispatch(ObtemTodosIngredientes());
  }
  if (props.lanches.state === S.INITIAL) {
    props.dispatch(ObtemTodosLanches());
  }

  return <SelecionarLanches />
}

export default connect(state => ({
  ingredientes: state.Ingredientes,
  lanches: state.Lanches,
}))(Main);
