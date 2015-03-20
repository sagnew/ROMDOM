var Game = require('../Models/Game'),
    attributes = {
      // RAM address for currently playing music.
      musicAddress: '00F8',

      // Hex values for possible in-game music tracks.
      tracks: ['01', '02', '04', '07'],

      // RAM address for the game's currently used color palette.
      paletteAddress: '0773',

      // Hex values for possible color palette changes.
      palettes: ['00', '01', '02', '03', '04'],

      // RAM address for the game's current PPU color mode.
      ppuModeAddress: '0779',

      // Objects to represent arbitrary in-game sprites.
      sprites: [
        {
          "address": '0754',
        }
      ],

      // RAM address for horizontal scrolling.
      horizontalAddress: '0778',

      // RAM address for level advancement.
      advanceAddress: '0770',

      // RAM address for effective PPU alterations.
      ppuAddress: '0200'
    },
    Mario = new Game(attributes);

module.exports = Mario;
