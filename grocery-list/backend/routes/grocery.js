import { Router } from 'express';
import GroceryController from '../controllers/grocery.js';

const router = Router();

router.post('/', (req, res) => {
  res.send(GroceryController.createGrocery());
});

router.get('/', (req, res) => {
  res.send(GroceryController.readGroceries());
});

export default router;
