
import React from 'react';
import PropTypes from 'prop-types';

import PaoDeCima from './PaoDeCima';
import PaoDeBaixo from './PaoDeBaixo';
import Alface from './Alface';
import Bacon from './Bacon';
import CarneDeHamburguer from './CarneDeHamburguer';
import Ovo from './Ovo';
import Queijo from './Queijo';

const mapIngredientes = {
  alface: Alface,
  bacon: Bacon,
  hamburguer: CarneDeHamburguer,
  ovo: Ovo,
  queijo: Queijo,
};

function renderIngrediente(ingrediente, index) {
  const Ingrediente = mapIngredientes[ingrediente];
  if (!Ingrediente) throw Error('Ingrediente inválido');
  return <Ingrediente key={index} />;
}

const burguer = (props) => {
  const { ingredientes } = props;
  return (
    <div className="row">
      <div className="col-sm">
        <PaoDeCima />
        {
          ingredientes.map((ingr, ix) => renderIngrediente(ingr, ix))
        }
        <PaoDeBaixo />
      </div>
    </div>
  );
};

burguer.propTypes = {
  ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default burguer;
