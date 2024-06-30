import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:5173", ""],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("I am Okay bro 😒");
});

export default app;
