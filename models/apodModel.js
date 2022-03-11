import mongoose from "mongoose";

//define schema
var apodSchema = new mongoose.Schema({
  title: String,
  date: {
      type : Date,
  },
  explanation: String,
  media_type: String,
  image_url: String,
});

var apodModel = new mongoose.model("apodData", apodSchema);
export default apodModel;
