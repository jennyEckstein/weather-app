const request = require('request');
const yargs = require('yargs');

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

const ADDRESS_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
address_str = encodeURIComponent(argv.address);

request({
  url: ADDRESS_URL + address_str,
  json: true //converts string automatically to obj
}, (error, response, body) =>{
  //console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address ${body.results[0].formatted_address}`);
  console.log(`Lat: ${body.results[0].geometry.location.lat}`);
  console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});
