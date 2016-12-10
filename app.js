const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=60%20west%20129%20street%20new%20york%20ny',
  json: true //converts string automatically to obj
}, (error, response, body) =>{
  //console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address ${body.results[0].formatted_address}`);
  console.log(`Lat: ${body.results[0].geometry.location.lat}`);
  console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});
