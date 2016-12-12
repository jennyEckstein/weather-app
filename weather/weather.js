
const request = require('request');

const BASE_URL = "https://api.darksky.net/forecast/";
const API_KEY = "705be00c5c49b6704f33c3fc1e7dcc56/";

var getWeather = (lat, lng, callback) => {
  request({
    url: BASE_URL + API_KEY + lat + "," + lng,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }else{
      callback('Unable to fetch weather');
    }
  })
};

module.exports.getWeather = getWeather;
