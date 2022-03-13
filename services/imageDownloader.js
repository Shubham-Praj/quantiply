import fs from "fs";
import https from "https";

async function saveImageToDisk(imageUrl,date) {
    
  https.get(imageUrl, (res) => {
    res.pipe(fs.createWriteStream("./images/" + date + ".png"));
  });
}

export default saveImageToDisk;
