import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connecttionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(`DB connected ${connecttionInstance.Connection.host}`);
  } catch (error) {
    console.error("ERROR", error);
    process.exit(1);
  }
};

export default connectDB;
