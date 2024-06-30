import { Server } from "http";
import mongoose from "mongoose";
import config from "./config";
import app from "./app";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url || "mongodb://127.0.0.1/test");
    console.log("Database Connected ✅");

    server = app.listen(config.port, () => {
      console.log(`Server is Fire at http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
