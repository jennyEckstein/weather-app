const request = require('request');

var geocodeAddress = (address, callback) => {
  const ADDRESS_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  address_str = encodeURIComponent(address);

  request({
    url: ADDRESS_URL + address_str,
    json: true //converts string automatically to obj
  }, (error, response, body) =>{
    //console.log(JSON.stringify(body, undefined, 2));
    // 2 types of errors we worry from machines
    //errors coming from google machine
    if(error){
      callback('Unable to connect to google servers');
    }else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to find that address');
    }else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      });
    }
  });

};

module.exports = {
  geocodeAddress
};
