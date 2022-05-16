import { Router } from 'express';
import GroceryController from '../controllers/grocery.js';

const router = Router();

router.post('/', (req, res) => {
  res.send(GroceryController.createGrocery());
});

router.get('/', async (req, res) => {
  res.send(await GroceryController.readGroceries());
});

export default router;
