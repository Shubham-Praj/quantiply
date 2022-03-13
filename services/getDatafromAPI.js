import fetch from "node-fetch";

async function fetchApodData(date) {
  const rest = await fetch(
    `${process.env.BASE_URL}date=${date}&&api_key=${process.env.API_KEY}`
  );
  const data = await rest.json();
  return data;
}

export default fetchApodData;
