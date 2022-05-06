import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const grocerySchema = new Schema({
  date: { type: Date, default: Date.now },
});

const Grocery = model('Grocery', grocerySchema);
export default Grocery;
