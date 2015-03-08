var fs = require('fs'),
    romdom = {};

romdom.readRamByte = function() {
};

romdom.writeRamByte = function(address, value) {
  fs.writeFile('address.txt', address, function(err){
    if(err) throw err;
  });

  fs.writeFile('value.txt', address, function(err){
    if(err) throw err;
  });

  fs.writeFile('action.txt', 'writeRamByte', function(err){
    if(err) throw err;
  });
};

module.exports = romdom;
