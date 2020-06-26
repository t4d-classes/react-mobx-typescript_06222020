import React, { FC, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';

import { CarToolStore } from '../stores/CarToolStore';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';


export interface CarToolProps {
  store: CarToolStore;
}

export const CarTool: FC<CarToolProps> = ({ store }) => {

  useEffect(() => {
   store.refreshCars(); 
  }, [ store ]);

  return useObserver(() => (
    <>
      <ToolHeader>
        <h1>
          Car Tool<br />
          <small>The best car tool ever!</small>
        </h1>
      </ToolHeader>
      <CarTable cars={store.cars.slice()} editCarId={store.editCarId}
        onEditCar={store.editCar} onDeleteCar={store.removeCar}
        onSaveCar={store.replaceCar} onCancelCar={store.cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={store.appendCar} />
    </>
  ));

};