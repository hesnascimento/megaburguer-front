import React from 'react';
import Burguer from '../../components/burguer'

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 offset-sm-3">
        <img
          style={{
            maxWidth:'100%',
          }}
          src="/images/megaburguer_logo.png"
          alt="MEGABURGUER - Do tamanho da sua fome" />
      </div>
    </div>
    <div
      className="row"
      style={{
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: '#CCCCCCCC',
      }}>
      <div
        className="col-sm"
        style={{
          marginTop: '2em',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 300,
          color: '#FFFFFF',
          fontSize: '23px',
        }}>
        Escolha o Burguer:
      </div>
    </div>
    <div className="row">
        <Burguer ingredientes={[
          'alface',
          'queijo',
          'ovo',
          'hamburguer',
        ]}/>
    </div>
  </div>
)
