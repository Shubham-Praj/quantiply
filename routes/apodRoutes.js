import express from "express";
import apodControllerTest from "../controllers/apodController.js";

const apodRouter = express.Router();

//Function call based on apod routes call
apodRouter.post("/getapoddata",apodControllerTest.getApodData);

export default apodRouter;
