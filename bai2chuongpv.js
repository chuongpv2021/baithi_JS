let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 30;
let y = 40;
let width = 80;
let height = 60;
let color = 'red';

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);