import React, { FC } from 'react';

export interface UnorderedListProps<S> {
  items: S[];
  keyFn?: (item: S) => string | number;
  contentFn: (item: S) => string | number;
  onRemoveItem?: (itemId: string | number) => void;
}

export const BuildUnorderedList = <T,>() => {

  const UnorderedList: FC<UnorderedListProps<T>> = ({
    items, onRemoveItem: removeItem, keyFn, contentFn,
  }) => {
  
    return (
      <ul>
        {items.map(item => <li key={keyFn!(item)}>
          {contentFn(item)}
          {removeItem && <button type="button"
            onClick={() => removeItem(keyFn!(item))}>X</button>}
        </li>)}
      </ul>
    );
  
  };
  
  UnorderedList.defaultProps = {
    keyFn: (item: any) => item.id,
  };

  return UnorderedList;
};


