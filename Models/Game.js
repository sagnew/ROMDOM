var utils = require('../utils'),
    Game = function (options) {
      var game = {
            sound: {
              musicAddress: options.musicAddress,
              tracks: options.tracks,
            },
            visual: {
              paletteAddress: options.paletteAddress,
              palettes: options.palettes,
              ppuModeAddress: options.ppuModeAddress
            },
            sprites: options.sprites,
            scroll: {
              horizontalAddress: options.horizontalAddress
            },
            level: {
              advanceAddress: options.advanceAddress
            },
            ppu: {
              ppuAddress: options.ppuAddress
            }
          };
      console.log(options);

      game.sound.changeTrack = function(track) {
        utils.writeRamByte(this.musicAddress, this.tracks[track]);
      };

      game.visual.changePPUMode = function(value) {
        utils.writeRamByte(this.ppuModeAddress, value);
      };

      game.visual.changePalette = function(value) {
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
