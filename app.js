import dotenv from "dotenv";
import express from "express";
import apodRouter from "./routes/apodRoutes.js";
import apodConnector from "./connector/apodConnector.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors({
  origin: '*'
}));
app.use(express.json());

//Home Page Test Route
app.get("/", (req, res) => {
  res.send("Homg Page");
});

//APOD Routes
app.post("/getapoddata", apodRouter);

app.listen(process.env.PORT, () => {
  console.log("Server Up and live on ", process.env.PORT);
});
