
import React from 'react';

import PaoDeCima from './PaoDeCima';
import PaoDeBaixo from './PaoDeBaixo';
import Alface from './Alface';
import Bacon from './Bacon';
import CarneDeHamburguer from './CarneDeHamburguer';
import Ovo from './Ovo';
import Queijo from './Queijo';

const mapIngredientes = {
  alface: <Alface />,
  bacon: <Bacon />,
  hamburguer: <CarneDeHamburguer />,
  ovo: <Ovo />,
  queijo: <Queijo />,
};

function renderIngrediente(ingrediente) {
  const selecionado = mapIngredientes[ingrediente];
  if (!selecionado) throw Error('Ingrediente inválido');
  return selecionado;
}

export default (props) => {
  const ingredientes = props.ingredientes;
  return (
    <div className="row">
      <div className="col-sm">
        <PaoDeCima />
        {
          ingredientes.map(ingr => renderIngrediente(ingr))
        }
        <PaoDeBaixo />
      </div>
    </div>
  );
};
