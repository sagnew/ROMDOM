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

// Sorry NYTM
utils.readRomByte = function(address, callback) {
  fs.writeFile('address.txt', address, function(err){
    if(err) { console.log(err); return callback(err); }
    fs.writeFile('action.txt', 'readRomByte', function(err){
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

// Sorry NYTM
utils.readRomByteSync = function(address) {
  var date = new Date();
  var curDate = null;

  fs.writeFileSync('address.txt', address);
  fs.writeFileSync('action.txt', 'readRomByte');

  // This is the worst code I've ever written.
  do { curDate = new Date(); }
  while(curDate-date < 500);

  return fs.readFileSync('value.txt', { 'encoding': 'utf8' });
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
    if(err) { return callback(err); }
    var interval = setInterval(function() {
      utils.readRamByte(address, function(err, current) {
        if(err) { return callback(err); }
        if(initial !== current) {
          clearTimeout(interval);
          callback(null, current);
        }
      });
    }, 1000);
  });
};

utils.printToScreen = function(text) {
  fs.writeFile('print.txt', text, function(err){
    if(err) throw err;
  });
};

module.exports = utils;
