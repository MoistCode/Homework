const Circle = require('./circle.js');

const circles = [];

window.Game = function(xDim, yDim) {
  this.xDim = xDim;
  this.yDim = yDim;

  for (let i = 0; i < Game.NUM_CIRCLES); ++i) {
    circles.push(
      Circle.randomCircle(xDim, yDim, Game.NUM_CIRCLES)
    );
  }
};

Game.NUM_CIRCLES = 4000;

Game.prototype.render = function(ctx) {
  // Empty canvas
  ctx.clearRect(0, 0, this.xDim, this.yDim);

  circles.forEach(function (circle) {
    circle.render(ctx);
  });
}

Game.prototype.moveCircles = function() {
  circles.forEach( circle => {
    circle.moveRandom(this.xDim, this.yDim);
  });
};

Game.prototype.start = function(canvas) {
  const ctx = canvas.getContext('2d');

  const animatedCallback = () => {
    this.moveCircles();
    this.render(ctx);
    requestAnimationFrame(animatedCallback);
  };
  animatedCallback();
};

module.exports = Game;
