# ROMDOM
A javascript NES hacking library that emulates something similar to the DOM for programmatically editing games in real time.

This library allows you to use Node.js to interface with most emulators that include Lua scripting functionality. It was designed to interact with NES games in mind, but most old games act fundamentally the same way. It's intended us is to run with the FCEUX NES emulator, but many emulators have the same Lua API, so this also works with other emulators such as VisualBoy Advance and SNES9x.

## Setup

First you will need to download a proper emulator with Lua scripting included. We recommend [FCEUX](http://www.fceux.com/web/download.html) as it comes with a hex editor and many debugging capabilities. Most of these emulators only include the necessary ROM hacking tools in their Windows versions, much to the dismay of many in the developer world. The windows versions of these emulators can be run effectively in Wine if you are a Mac or Linux user, and that is not too difficult to set up(open the .exe file with Wine, and let the magic happen).

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
