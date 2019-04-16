import React from 'react';
import { connect } from 'react-redux';

import { ObtemTodosIngredientes } from '../../actions/IngredientesActions'
import { ObtemTodosLanches } from '../../actions/LanchesActions';
import SelecionarLanches from './SelecionarLanche';
import CustomizaLanche from './CustomizarLanche';
import S from '../../enums/States';

function Main(props) {
  if (props.ingredientes.state === S.INITIAL) {
    props.dispatch(ObtemTodosIngredientes());
  }
  if (props.lanches.state === S.INITIAL) {
    props.dispatch(ObtemTodosLanches());
  }

  console.log(props)

  if (Object.keys(props.lanche.lanche).length === 0) {
    return <SelecionarLanches />
  } else {
    return <CustomizaLanche />
  }

}

export default connect(state => ({
  ingredientes: state.Ingredientes,
  lanches: state.Lanches,
  lanche: state.Lanche,
}))(Main);
