// Draw Sunrise
'use strict';

// Setup canvas and graphics context
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.height = 400;
cnv.width = 400;

// Store image to var
let cloudImg = document.getElementById('cloth-cloud');

// Draw Rectangle (Blue)
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 400, 300);

// Draw Circle
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(200, 300, 20, 0, 2 * Math.PI);
ctx.fill();

// Draw Rectangle (Green)
ctx.fillStyle = 'green';
ctx.fillRect(0, 300, 400, 100);

// Draw Image
ctx.drawImage(cloudImg, 125, 125);
ctx.drawImage(cloudImg, 175, 100);