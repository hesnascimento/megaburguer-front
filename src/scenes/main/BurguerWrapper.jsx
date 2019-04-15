import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Burguer from '../../components/burguer';

class BurgueWrapper extends Component {
  constructor(props) {
    super(props);

    const { selectHandler } = this.props;

    this.selecionarClick = selectHandler;
  }

  render() {
    const { ingredientes, nome } = this.props;
    return (
      <div
        className="burguer-wrapper bg-dark col-md-3 col-sm-2 col-xs-12"
        style={{
          padding: '2em',
          marginTop: '20px',
          marginInlineEnd: '15px',
        }}
      >
        <div className="row">
          <div className="col-sm">
            <Burguer
              ingredientes={ingredientes}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm nome-label text-center text-white font-weight-bold">
            {nome}
          </div>
        </div>
        <div className="row">
          <div className="col-sm nome-label text-center text-success font-weight-light">
            Valor Base R$ 8,90
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm text-center"
            style={{
              marginTop: '15px',
              marginBottom: '15px',
            }}
          >
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.selecionarClick}
            >
              SELECIONAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}

BurgueWrapper.propTypes = {
  selectHandler: PropTypes.func.isRequired,
  nome: PropTypes.string.isRequired,
  ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BurgueWrapper;
