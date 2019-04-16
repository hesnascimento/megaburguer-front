import React, { Component } from 'react';
import { connect } from 'react-redux';
import S from '../../enums/States';
import { adicionaItem, removeItem } from '../../actions/LancheActions';
import Burguer from '../../components/burguer';
import SeletorIngredientes from './SeletorIngredientes'

class CustomizarLanche extends Component {
  constructor(props) {
    super(props);

    this.addIngrediente = this.addIngrediente.bind(this);
    this.removerIngrediente = this.removerIngrediente.bind(this);
  }

  addIngrediente(ingrediente){
    return () => {
      this.props.dispatch(adicionaItem(ingrediente));
    }
  }

  removerIngrediente(ingrediente){
    return () => {
      this.props.dispatch(removeItem(ingrediente));
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <Burguer
            ingredientes={this.props.lanche.lanche.ingredientes}
          />
        </div>
        <div className="col-md-6">
          {this.props.ingredientes.ingredientes
            .map(ingrediente => <SeletorIngredientes
              total={this.props.lanche.lanche.ingredientes.filter(val => val === ingrediente.id).length}
              ingrediente={ingrediente.nome}
              preco={ingrediente.preco.toFixed(2)}
              onAddClick={this.addIngrediente(ingrediente.id)}
              onRemoveClick={this.removerIngrediente(ingrediente.id)}
            />)}
        </div>
      </div>
    )
  }
}

export default connect(store => ({
  lanche: store.Lanche,
  ingredientes: store.Ingredientes,
}))(CustomizarLanche);
