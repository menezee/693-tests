import mongoose from 'mongoose';

async function connect() {
  await mongoose.connect('mongodb://user:password@localhost:27017');
}

export default {
  connect,
};
