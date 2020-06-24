import React, { FC } from 'react';

export interface UnorderedListProps {
  items: any[];
  keyFn?: (item: any) => string | number;
  contentFn: (item: any) => string | number;
  onRemoveItem?: (itemId: string | number) => void;
}

export const UnorderedList: FC<UnorderedListProps> = ({
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
  keyFn: (item) => item.id,
};