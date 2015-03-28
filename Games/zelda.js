var Game = require('../Models/Game'),
    attributes = {
      // RAM address for currently playing music.
      musicAddress: '0600',

      // Hex values for possible in-game music tracks.
      tracks: ['01', '10', '20', '40', '80'],

      // RAM address for the game's currently used color palette.
      paletteAddress: '',

      // Hex values for possible color palette changes.
      palettes: [],

      // RAM address for the game's current PPU color mode.
      ppuModeAddress: '',

      // Objects to represent arbitrary in-game sprites.
      sprites: [
        {
          "address": '',
        }
      ],

      // RAM address for horizontal scrolling.
      horizontalAddress: '',

      // RAM address for level advancement.
      advanceAddress: '',

      // RAM address for effective PPU alterations.
      ppuAddress: ''
    },
    Zelda = new Game(attributes);

module.exports = Zelda;
