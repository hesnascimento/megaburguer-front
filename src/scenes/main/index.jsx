import React from 'react';
import { connect } from 'react-redux';
import { ObtemTodosIngredientes } from '../../actions/IngredientesActions'
import Burguer from './BurguerWrapper';
import S from '../../enums/States';

function Main(props) {
  if(props.ingredientes.state === S.INITIAL) {
    props.dispatch(ObtemTodosIngredientes());
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
      <div className="row">
        <Burguer
          ingredientes={[
            'queijo',
            'ovo',
            'hamburguer',
          ]}
          nome="X-Egg"
          selectHandler={() => alert('OI')}
        />
      </div>
    </div>
  );
}

export default connect(state => ({
  ingredientes: state.Ingredientes,
}))(Main);
