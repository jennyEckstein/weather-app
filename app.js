const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address);
