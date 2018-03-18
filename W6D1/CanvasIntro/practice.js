/*
  Waits for the document to be loaded before looking for the canvas
  element
*/
document.addEventListener("DOMContentLoaded", function() {
  // 1. Grab the canvas element by ID and save it to a variable
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 100, 50); // First two points set the origin

  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.arc(200, 200, 100, 0, (2 * Math.PI));
  ctx.fillStyle = 'pink';
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 20);
  ctx.stroke();
});
