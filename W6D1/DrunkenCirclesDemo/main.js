const Game = require('./lib/game.js');

const canvas = document.getElementByTagName("canvas")[0];
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

new Game(
  canvas.width,
  canvas.height
).start(canvas);
