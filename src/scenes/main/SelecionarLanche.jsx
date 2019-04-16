import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selecionar } from '../../actions/LancheActions';
import Burguer from './BurguerWrapper';
import S from '../../enums/States';


class SelecionarLanche extends Component {
  constructor(props) {
    super(props);

    this.selecionar = this.selecionar.bind(this);
  }

  selecionar(lanche) {
    return () => {
      this.props.dispatch(selecionar(lanche));
    }
  }

  render() {
    let lanches = [];

    if (this.props.lanches.state === S.FETCHED) {
      lanches = this.props.lanches.lanches
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <img
              style={{
                maxWidth: '100%',
              }}
              src="/images/megaburguer_logo.png"
              alt="MEGABURGUER - Do tamanho da sua fome"
            />
          </div>
        </div>
        <div
          className="row"
          style={{
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px',
            borderBottomColor: '#CCCCCCCC',
          }}
        >
          <div
            className="col-sm"
            style={{
              marginTop: '2em',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 300,
              color: '#FFFFFF',
              fontSize: '23px',
            }}
          >
            Escolha o Burguer:
          </div>
        </div>
        <div className="row no-gutters">
          {lanches.map(lanche => (
            <Burguer
              ingredientes={lanche.ingredientes}
              nome={lanche.lanche}
              preco={lanche.preco}
              selectHandler={this.selecionar(lanche)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  lanches: state.Lanches,
}))(SelecionarLanche);
