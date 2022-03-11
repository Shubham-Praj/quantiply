import apodModel from "../models/apodModel.js";
import fetch from "node-fetch";

const apodControllerTest = {};
var apiAPODData;

apodControllerTest.getApodData = async (req, res) => {
  const rest = await fetch(
    `${process.env.BASE_URL}date=${req.body.date}&&api_key=${process.env.API_KEY}`
  );
  const data = await rest.json();

  // fetch(
  //   `${process.env.BASE_URL}date=${req.body.date}&&api_key=${process.env.API_KEY}`
  // )
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //    console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });



  try {
    //Condition to check if data is present in DB


    //if data not present add data to db and load send
    // const apod1 = new apodModel({
    //   title: data.title,
    //   date: data.date,
    //   explanation: data.explanation,
    //   media_type: data.media_type,
    //   image_url: data.url,
    // });
  
    // apodModel.insertMany([apod1]);


    return res.status(200).json({
      status: 200,
      data: apod,
      message: "Succesfully APOD Retrieved",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "INTERNAL_SERVER_ERROR",
    });
  }
};

export default apodControllerTest;
