var Game = require('../Models/Game'),
    layout = {
      sound: {
        musicAddress: '00F8',
        tracks: ['01', '02', '04', '07'],
      },
      visual: {
        paletteAddress: '0773',
        palettes: ['00', '01', '02', '03', '04'],
        PPUModeAddress: '0779'
      },
      sprites: [
        {
          "address": '0754',
        }
      ],
      scroll: {
        horizontalAddress: '0778'
      },
      level: {
        advanceAddress: '0770'
      },
      ppu: {
        ppuAddress: '0200'
      }
    },
    Mario = new Game(layout);

module.exports = Mario;
