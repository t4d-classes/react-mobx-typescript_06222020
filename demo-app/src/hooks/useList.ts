import { useState } from 'react';

import { Item } from '../models/item';

type AppendItem<S> = (item: S) => void;
type ReplaceItem<R> = (item: R) => void;
type RemoveItem = (itemId: number) => void;

type UseList = <T extends Item>(initialCars: T[]) => ([
  T[], AppendItem<T>, ReplaceItem<T>, RemoveItem
]);

export const useList: UseList = <T extends Item>(initialItems: T[]) => {

  const [ items, setItems ] = useState(initialItems);

  const appendItem: AppendItem<T> = (item) => {

    const nextItemId = Math.max(...items.map(c => c.id!), 0) + 1;

    setItems(items.concat({
      ...item,
      id: nextItemId,
    }));
  };

  const replaceItem: ReplaceItem<T> = (item) => {
    const itemIndex = items.findIndex(c => c.id === item.id);
    const newItems = items.concat();
    newItems[itemIndex] = item;
    setItems(newItems);
  };

  const removeItem: RemoveItem = (carId: number) => {
    setItems(items.filter(c => c.id !== carId));
  };

  return [ items, appendItem, replaceItem, removeItem ];

};