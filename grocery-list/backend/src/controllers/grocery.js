import Grocery from '../repositories/grocery.js';

function createGrocery() {
  const NewGrocery = new Grocery();
  return NewGrocery.save();
}

async function readGroceries() {
  const res = await Grocery.find({});
  console.log({res});
  return res;
}

export default {
  createGrocery,
  readGroceries,
};
