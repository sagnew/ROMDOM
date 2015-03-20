var utils = require('../utils'),
    Game = function (layout) {
      var game = layout;

      game.sound.changeTrack = function(track) {
        utils.writeRamByte(this.musicAddress, this.tracks[track]);
      };

      game.visual.changePPUMode = function(value) {
        utils.writeRamByte(this.PPUModeAddress, value);
      };

      game.visual.changePalette = function(value) {
        console.log(this);
        utils.writeRamByte(this.paletteAddress, this.palettes[value]);
      }

      game.scroll.horizontalOffset = function(offset) {
        utils.writeRamByte(this.horizontalAddress, offset);
      };

      game.level.advance = function() {
        utils.writeRamByte(this.advanceAddress, '02');
      };

      game.ppu.write = function(value) {
        utils.writeRamByte(this.ppuAddress, value);
      };

      game.onSpriteChange = function(sprite, callback){
        utils.memoryListener(sprite.address, callback);
      };

      return game;
  };

module.exports = Game;
