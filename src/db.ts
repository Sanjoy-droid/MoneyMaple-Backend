
import mongoose from 'mongoose';
import 'dotenv/config'

const mongoURI = process.env.MONGO_URI as string;

const connectToMongo = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error connecting to MongoDB:", error.message);
    } else {
      console.error("Failed to conncet to MongoDB:", error);
    }
    process.exit(1);
  }
};

export default connectToMongo;
