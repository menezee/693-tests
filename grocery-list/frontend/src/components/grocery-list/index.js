import React, { memo } from 'react';
import GroceryItem from '../grocery-item';

function GroceryList({ items, onChange, onDelete }) {
  return (
    <ul>
      {
        items.map(item => (
          <GroceryItem
            key={item.createdAt}
            description={item.description}
            onChange={onChange(item.createdAt)}
            amount={item.amount}
            onDelete={onDelete(item.createdAt)}
            createdAt={item.createdAt}
          />
        ))
      }
    </ul>
  );
}

export default memo(GroceryList);
