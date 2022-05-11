import { useState } from 'react';
import GroceryList from 'components/grocery-list';

const createNewItem = () => ({
  createdAt: new Date().toISOString(),
  description: '',
  amount: 1,
})

function Groceries() {
  const [items, setItems] = useState([]);
  
  const onChange = id => attr => value => {
    console.log({ id, attr, value });
    setItems(
      items.map(item => {
        if (item.createdAt === id) {
          return { ...item, [attr]: value };
        }
        
        return item;
      }),
    );
  };
  
  const handleAddItem = () => {
    setItems([
      ...items,
      createNewItem(),
    ]);
  };
  
  const handleDelete = id => () => {
    console.log('[handleDelete]', id);
    setItems(
      items.filter(item => {
        return item.createdAt !== id;
      })
    )
  };
  
  return (
    <main>
      <button onClick={handleAddItem}>Add item</button>
      <GroceryList items={items} onChange={onChange} onDelete={handleDelete}/>
      <button>Save list</button>
      <pre>
        {
          JSON.stringify(items, null, 2)
        }
      </pre>
    </main>
  );
}

export default Groceries;
