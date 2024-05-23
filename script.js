const canvas = document.getElementById("Game");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#17B169";
ctx.fillRect(0, 0, 960, 540);
ctx.beginPath();
ctx.moveTo(480, 0);
ctx.lineTo(480, 540);
ctx.lineWidth = 3;
ctx.strokeStyle = '#fff';
ctx.stroke()
ctx.beginPath();
ctx.arc(480, 270, 100, 0, 5 * Math.PI);
ctx.stroke();