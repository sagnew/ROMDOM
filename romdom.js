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
  romdom.readRamByte(address, function(err, initial) {
    console.log("init" + initial);
    if(err) { return callback(err); }
    setInterval(function() {
      romdom.readRamByte(address, function(err, current) {
        if(err) { return callback(err); }
        if(initial !== current) {
          callback(null, current);
        }
      });
    }, 1000);
  });
};

// Game specific functions.
sound.tracks = [01, 02, 04, 07];
sound.music = {
  changeTrack: function(track) {
    romdom.writeRamByte('00FB', sound.tracks[track]);
  }
};
sound.effects = {};

visual.color = {
  changePPUMode: function(value) {
    romdom.writeRamByte('0779', value);
  }
};
visual.color.palettes = ['00', '01', '02', '03', '04'];
visual.color.palette = function(value) {
  romdom.writeRamByte('0773', visual.color.palettes[value]);
}
visual.sprites = {};

game.scroll = {};
game.scroll.horizontal = function(offset) {
  romdom.writeRamByte('0778', offset);
};

game.level = {};
game.level.advance = function() {
  romdom.writeRamByte('0770', '02');
};

ppu.write = function(value) {
  romdom.writeRamByte('0200', value);
};

game.sound = sound;
game.visual = visual;
game.ppu = ppu;
romdom.game = game;

module.exports = romdom;
