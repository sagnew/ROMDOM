var fs = require('fs'),
    romdom = {},
    game = {},
    sound = {},
    ppu = {},
    visual = {};

// Basic emulator/memory utility functions.
//
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

romdom.memoryListener = function(address, callback) {
};

// Game specific functions.
sound.music = {};
sound.effects = {};
sound.tracks = [01, 02, 04, 07];

visual.color = {};
visual.sprites = {};

ppu.write = function(value) {
  romdom.writeRamByte('0200', value);
};
game.sound = sound;
game.visual = visual;
game.ppu = ppu;
romdom.game = game;

module.exports = romdom;
