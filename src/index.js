// require("dotenv").config({ path: ".env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: ".env" });

console.log(process.env.MONGODB_URI);

connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
//     console.log("DB connected");
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
