import express from 'express';
import GroceryRouter from './routes/grocery.js';
import db from './database/index.js';

const app = express();
app.use('/groceries', GroceryRouter);

app.use('/load', (req, res) => {
  console.log(new Date().toISOString());
  res.sendStatus(200);
});

(async function() {
  await db.connect();
  app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
  });
})();
