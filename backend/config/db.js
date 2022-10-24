import mongoose from 'mongoose';

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log({ message: error.message });
    process.exit(1);
  }
};

export default dbConfig;
