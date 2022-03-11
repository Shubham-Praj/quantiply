import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/apod", { useNewUrlParser: true });

const conn = mongoose.connection;

conn.on("connected", function(){
  console.log("Connected to Mongo Database");
});

conn.on("disconnected", () => {
  console.log("Connection Disconnected");
});

export default conn;
