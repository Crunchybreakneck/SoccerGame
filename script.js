const canvas = document.getElementById("Game");
const ctx = canvas.getContext("2d");
// add grass
ctx.fillStyle = "#17B169";
ctx.fillRect(0, 0, 960, 540);
// add half line
ctx.beginPath();
ctx.moveTo(480, 0);
ctx.lineTo(480, 540);
ctx.lineWidth = 3;
ctx.strokeStyle = '#fff';
ctx.stroke()
// add center circle
ctx.beginPath();
ctx.arc(480, 270, 100, 0, 5 * Math.PI);
ctx.stroke();
// add left goalie box
ctx.rect(0, 125, 150, 300);
ctx.stroke();
// add right goalie box
ctx.rect(810, 125, 150, 300);
ctx.stroke();