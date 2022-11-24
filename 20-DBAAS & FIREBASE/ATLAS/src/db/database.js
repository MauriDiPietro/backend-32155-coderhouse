import mongoose from 'mongoose';

const connectionString = process.env.MONGO_ATLAS || 'mongodb://localhost:27017/coderhouse';

export const initMongoDB = async () => {
  try {
    console.log('CONECTANDO A MI DB...');
    await mongoose.connect(connectionString);

    console.log('YA ESTOY CONECTADO');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};
