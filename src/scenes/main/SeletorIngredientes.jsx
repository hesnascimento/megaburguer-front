import React from 'react';

export default (props) => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <button className="btn btn-success" onClick={props.onAddClick}>
          +
        </button>
      </div>
      <div className="col-sm-6 text-light">
        (Qtd.: {props.total}) {props.ingrediente} R$ {props.preco}/UN
      </div>
      <div className="col-sm-3">
        <button className="btn btn-danger" onClick={props.onRemoveClick}>
          -
        </button>
      </div>
    </div>
  )
};
