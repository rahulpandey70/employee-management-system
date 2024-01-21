import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`\n Mongodb connected successfully!! `);
  } catch (error) {
    console.log("Mongodb connection failed", error);
    process.exit(1);
  }
};

export default connectToDB;
