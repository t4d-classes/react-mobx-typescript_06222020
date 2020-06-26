import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';

import { CarsService } from './services/CarsService';
import { CarToolStore } from './stores/CarToolStore';

import { CarTool } from './components/CarTool';

configure({ enforceActions: 'always' });

const store = new CarToolStore(
  new CarsService('http://localhost:3060'));

ReactDOM.render(
  <CarTool store={store} />,
  document.querySelector('#root'),

);

