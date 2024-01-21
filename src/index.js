import dotenv from "dotenv";
import { app } from "./app.js";
import connectToDB from "./db/index.js";

dotenv.config({ path: "./.env" });

connectToDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`\n Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`\n Mongodb connection failed!!`);
  });
