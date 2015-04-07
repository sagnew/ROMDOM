var fs = require('fs'),
    utils = require('./utils'),

    // I know this is dirty, but I will use _.extend later instead.
    romdom = utils;

// Returns an object corresponding to the current game being emulated.
romdom.setCurrentGame = function() {
  // This is terrible
  var val = romdom.readRomByteSync('0764');
  if(val === '5'){
    return require('./Games/mario');
  }else{
    return require('./Games/zelda');
  }
};

module.exports = romdom;
