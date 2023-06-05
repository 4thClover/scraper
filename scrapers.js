const cheerio = require("cheerio");
const axios = require("axios");
const url = "https://www.ret.nl/home/reizen/halte/pijnacker-zuid.html";

const time_data = [];

// First steps
async function scrapeTimeTable() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const title = $("h1").text();
    const timerows = $("span").text();

    time_data.push(timerows);

    console.log(title, timerows);
  } catch (error) {
    console.error(error);
  }
}

scrapeTimeTable();
