var fs = require('fs'),
    romdom = {};

romdom.readRamByte = function(address, callback) {
  fs.writeFile('action.txt', 'readRamByte', function(err){
    if(err) { console.log(err); return callback(err); }
    fs.writeFile('address.txt', address, function(err){
      if(err) { console.log(err); return callback(err); }
      fs.readFile('value.txt', { 'encoding': 'utf8' }, function(err, data){
        if(err) { console.log(err); return callback(err); }
        callback(null, data);
      });
    });
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
