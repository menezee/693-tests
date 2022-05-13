import mongoose from 'mongoose';

async function connect() {
  await mongoose.connect('mongodb://balta:e296cd9f@localhost:27017');
}

export default {
  connect,
};
