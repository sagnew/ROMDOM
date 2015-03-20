var fs = require('fs'),
    utils = {};

utils.readRamByte = function(address, callback) {
  fs.writeFile('address.txt', address, function(err){
    if(err) { console.log(err); return callback(err); }
    fs.writeFile('action.txt', 'readRamByte', function(err){
      if(err) { console.log(err); return callback(err); }
      setTimeout(function() {
        fs.readFile('value.txt', { 'encoding': 'utf8' }, function(err, data){
          if(err) { console.log(err); return callback(err); }
          callback(null, data);
        });
      }, 500);
    });
  });
};

utils.writeRamByte = function(address, value) {
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

utils.memoryListener = function(address, callback) {
  utils.readRamByte(address, function(err, initial) {
    console.log("init" + initial);
    if(err) { return callback(err); }
    setInterval(function() {
      utils.readRamByte(address, function(err, current) {
        if(err) { return callback(err); }
        if(initial !== current) {
          callback(null, current);
        }
      });
    }, 1000);
  });
};

module.exports = utils;
