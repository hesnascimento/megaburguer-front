import React from 'react';
import ReactDOM from 'react-dom';
import Alface from './Alface';

it('renders Alface without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Alface />, div);
  ReactDOM.unmountComponentAtNode(div);
});
