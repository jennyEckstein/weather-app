const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetach weather for',
      string: true //always parce a as a string
    }
})
.help()
.alias('help', 'h')
.argv;


var encodedAddress = encodeURIComponent(argv.address);

const ADDRESS_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
address_str = encodeURIComponent(encodedAddress);

geocodeUrl = ADDRESS_URL + address_str;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find the address');
  }

  const BASE_URL = "https://api.darksky.net/forecast/";
  const API_KEY = "705be00c5c49b6704f33c3fc1e7dcc56/";
  var lat  = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = BASE_URL + API_KEY + lat + "," + lng;

  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
  }else{
    console.log(e.message);
  }
});
