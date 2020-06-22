import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/color';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'red', hexcode: 'FF0000' }, 
  { id: 2, name: 'black', hexcode: '000000' }, 
  { id: 3, name: 'blue', hexcode: '0000FF' }, 
  { id: 4, name: 'periwinkle', hexcode: 'CCCCFF' }, 
];

ReactDOM.render(
  // React.createElement(HelloWorld),
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),

);

