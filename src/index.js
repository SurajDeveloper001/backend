// require("dotenv").config({ path: ".env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: ".env" });

console.log(process.env.MONGODB_URI);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("MANGO DB CONNECTION FAILD", err);
  });
