const request = require('request');

var geocodeAddress = (address) => {
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
      console.log('Unable to connect to google servers');
    }else if(body.status === 'ZERO_RESULTS'){
      console.log('Unable to find that address');
    }else if (body.status === 'OK'){
      console.log(`Address ${body.results[0].formatted_address}`);
      console.log(`Lat: ${body.results[0].geometry.location.lat}`);
      console.log(`Lng: ${body.results[0].geometry.location.lng}`);
    }
  });

};

module.exports = {
  geocodeAddress
};
