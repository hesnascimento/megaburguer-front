import React, { Component } from 'react';
import { connect } from 'react-redux';
import S from '../../enums/States';
import { adicionaItem, removeItem, cancelar, enviaLanche } from '../../actions/LancheActions';
import { ObtemTodosLanches } from '../../actions/LanchesActions';
import Burguer from '../../components/burguer';
import SeletorIngredientes from './SeletorIngredientes'

class CustomizarLanche extends Component {
  constructor(props) {
    super(props);

    this.addIngrediente = this.addIngrediente.bind(this);
    this.removerIngrediente = this.removerIngrediente.bind(this);
    this.cancelarLanche = this.cancelarLanche.bind(this);
    this.enviarLanche = this.enviarLanche.bind(this);
  }

  addIngrediente(ingrediente) {
    return () => {
      this.props.dispatch(adicionaItem(ingrediente));
    }
  }

  removerIngrediente(ingrediente) {
    return () => {
      this.props.dispatch(removeItem(ingrediente));
    }
  }

  cancelarLanche() {
    return () => {
      this.props.dispatch(ObtemTodosLanches());
      this.props.dispatch(cancelar());
    }
  }

  enviarLanche(lanche) {
    return () => {
      this.props.dispatch(enviaLanche(lanche));
    }
  }


  render() {
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
            marginBottom: '15px'
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
            Customize seu {this.props.lanche.lanche.lanche}:
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <Burguer
              ingredientes={this.props.lanche.lanche.ingredientes}
            />
          </div>
          <div className="col-md-7">
            {this.props.ingredientes.ingredientes
              .map(ingrediente => <SeletorIngredientes
                total={this.props.lanche.lanche.ingredientes.filter(val => val === ingrediente.id).length}
                ingrediente={ingrediente.nome}
                preco={ingrediente.preco.toFixed(2)}
                onAddClick={this.addIngrediente(ingrediente.id)}
                onRemoveClick={this.removerIngrediente(ingrediente.id)}
              />)}
            <div className="row">
              <div className="col-sm text-center">
                <button className="btn btn-primary" onClick={this.enviarLanche(this.props.lanche.lanche)}>
                  Enviar
              </button>
                &nbsp;
                &nbsp;
              <button className="btn btn-danger" onClick={this.cancelarLanche()}>
                  Cancelar
              </button>
              </div>
            </div>
            {
              Object.keys(this.props.lanche.valores).length !== 0 &&
              <div className="row" style={{
                marginTop:'20px'
              }}>
                <div className="col-md">
                  <div className="alert alert-success">
                    <p>
                      <b>Resumo do seu pedido</b>
                    </p>
                    <span>
                      <p>Lanche base: {this.props.lanche.lanche.lanche}</p>
                      <p>Valor lanche customizado: R$ {this.props.lanche.valores.valorBase}</p>
                      {this.props.lanche.valores.muitaCarne > 0 && <p>{this.props.lanche.valores.muitaCarne} x Promoção Muita Carne: -R$ {parseFloat(this.props.lanche.valores.descontoMuitaCarne).toFixed(2)}</p>}
                      {this.props.lanche.valores.muitoQueijo > 0 && <p>{this.props.lanche.valores.muitoQueijo} x Promoção Muito Queijo: -R$ {parseFloat(this.props.lanche.valores.descontoMuitoQueijo).toFixed(2)}</p>}
                      {this.props.lanche.valores.isLight === true && <p> - 10% Promoção Light</p>}
                      <p>Valor final: R$ {this.props.lanche.valores.valorFinal}</p>
                    </span>
                    <button className="btn btn-primary" onClick={this.cancelarLanche()}>
                     Concluir
                    </button>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

      </div>
    )
  }
}

export default connect(store => ({
  lanche: store.Lanche,
  ingredientes: store.Ingredientes,
}))(CustomizarLanche);
