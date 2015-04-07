# ROMDOM
A JavaScript NES hacking library for programmatically editing games in real time. ROMDOM allows you to manipulate NES games with JavaScript similar to how you can interact with a web page through the DOM.

This library allows you to use Node.js to interface with most emulators that include Lua scripting functionality. It was designed to interact with NES games in mind, but most old games act fundamentally the same way. It's intended us is to run with the FCEUX NES emulator, but many emulators have the same Lua API, so this also works with other emulators such as VisualBoy Advance and SNES9x.

## Setup

First you will need to download a proper emulator with Lua scripting included. We recommend [FCEUX](http://www.fceux.com/web/download.html) as it comes with a hex editor and many debugging capabilities. 

Note: Most of these emulators only include the necessary ROM hacking tools in their Windows versions, much to the dismay of many in the developer world. The windows versions of these emulators can be run effectively in Wine if you are a Mac or Linux user, and that is not too difficult to set up(open the .exe file with Wine, and let the magic happen).

Once you have your emulator set up:

1. Open a new Lua script(in FCEUX this is done by clicking file -> Lua -> New Lua script window), and run "romdom.lua" found in the base directory of this repository. This allows the emulator to listen for commands sent from your Node environment.
2. Require romdom.js in your JavaScript code, which will allow you to access our API to interact with the emulator.
```
// If you are in the same directory.
var rd = require('./romdom');

// Creates an object representing the current game that is being emulated.
// This allows you to access game-specific functions.
var game = rd.getCurrentGame();
```

## How it works

Hacking older games is usually done through hex editing. This involves manipulating the memory of the game by changing hexadecimal values in specific memory locations corresponding to changes you wish to make. Unfortunately, this is pretty unintuitive, tedious and hard to learn for most people.

The idea behind ROMDOM is to abstract away this aspect of NES hacking in order to allow the developer to focus on making changes to the game immediately, and without having to know the underlying memory map of the game(although this is never a bad thing to learn). We do this by creating JavaScript objects to represent specific games, and mapping important memory addresses, that represent features common to most old games(such as where graphical data is stored, music changes, etc) to variables in the object. This would allow someone with little knowledge of a specific game to still write scripts, and have fun hacking on it.

This only works with games that we have already mapped out, which you can see in the Games/ directory in this repository. If you are interested in non game-specific functionality, then you can use ROMDOM's utility functions for things such as adding event listeners to memory addresses.

## Usage

Coming soon. We are very early on in this project, and our API is constantly changing. If you are interested in learning exactly what functionality we provide, you can take a look at our source code in romdom.js, utils.js and Models/Game.js to see what functions are available(with comments). If you want to see an example of how games are laid out, you can check out Games/mario.js.
