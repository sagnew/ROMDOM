var fs = require('fs'),
    romdom = {};

romdom.readRamByte = function() {
  fs.writeFile('action.txt', 'writeRamByte', function(err){
    if(err) throw err;
  });

  fs.readFile('value.txt', function(err, data){
    if(err) throw err;
    console.log(data);
  });
};

romdom.writeRamByte = function(address, value) {
  fs.writeFile('address.txt', address, function(err){
    if(err) throw err;
  });

  fs.writeFile('value.txt', value, function(err){
    if(err) throw err;
  });

  fs.writeFile('action.txt', 'writeRamByte', function(err){
    if(err) throw err;
  });
};

module.exports = romdom;
