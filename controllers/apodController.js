import apodModel from "../models/apodModel.js";
import imageDownloader from "../services/imageDownloader.js";
import fetchApodData from "../services/getDatafromAPI.js";

const apodControllerTest = {};

apodControllerTest.getApodData = async (req, res) => {
  try {
    //Check if data is present in DB
    let data = await apodModel.findOne({ date: { $eq: req.body.date } }).exec();

    //If not then hit the api and download the image in images folder
    if (data == null) {
      data = await fetchApodData(req.body.date);

      const freshData = new apodModel({
        title: data.title,
        copyright: data.copyright,
        date: data.date.toString(),
        explanation: data.explanation,
        media_type: data.media_type,
        image_url: data.hdurl || data.url,
      });

      await apodModel.insertMany([freshData]);

      if (data.media_type === "image") {
        imageDownloader(data.url, req.body.date);
      }
    }

    return res.status(200).json({
      status: 200,
      data: data,
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
