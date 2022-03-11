import dotenv from "dotenv";
import express from "express";
import apodRouter from "./routes/apodRoutes.js";
import apodConnector from "./connector/apodConnector.js";

dotenv.config();
const app = express();
app.use(express.json());

//Home Page Route
app.get("/", (req, res) => {
  res.send("Homg Page");
});

//APOD Routes
app.post("/getapoddata", apodRouter);

app.listen(process.env.PORT, () => {
  console.log("Server Up and live on ", process.env.PORT);
});
