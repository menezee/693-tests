import express from 'express';
import GroceryRouter from './routes/grocery.js';
import db from './database/index.js';

const app = express();
app.use('/groceries', GroceryRouter);

(async function() {
  await db.connect();
  app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
  });
})();
