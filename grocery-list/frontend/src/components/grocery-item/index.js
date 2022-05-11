import React, { memo } from 'react';

function GroceryItem({ description, onChange, createdAt, amount, onDelete }) {
  const handleOnChange = attr => e => {
    const setValueForAttr = onChange(attr);
    setValueForAttr(e.target.value);
  };
  
  console.log(onDelete);
  
  return (
    <li>
      <div>
        <label htmlFor={`description-${createdAt}`}>Description</label>
        <input id={`description-${createdAt}`} value={description} onChange={handleOnChange('description')} />
      </div>
      <div>
        <label htmlFor={`amount-${createdAt}`}>Amount</label>
        <input id={`amount-${createdAt}`} type='number' value={amount} onChange={handleOnChange('amount')} />
      </div>
      <button onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default memo(GroceryItem);
