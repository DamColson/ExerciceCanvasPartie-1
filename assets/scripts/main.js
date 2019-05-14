var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,25);
ctx.lineTo(300,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#d88437"
ctx.strokeStyle = "#d88437"
ctx.fill();
ctx.beginPath();
ctx.moveTo(300,100);
ctx.lineTo(300,300);
ctx.lineTo(100,300);
ctx.lineTo(100,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#a0d7e6"
ctx.strokeStyle = "#a0d7e6"
ctx.fill();
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#c9c9c9"
ctx.strokeStyle = "#c9c9c9"
ctx.fill();
ctx.beginPath();
ctx.moveTo(125,125);
ctx.lineTo(175,125);
ctx.lineTo(175,175);
ctx.lineTo(125,175);
ctx.lineTo(125,125);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#c9c9c9"
ctx.strokeStyle = "#c9c9c9"
ctx.fill();
ctx.beginPath();
ctx.moveTo(275,125);
ctx.lineTo(275,175);
ctx.lineTo(225,175);
ctx.lineTo(225,125);
ctx.lineTo(275,125);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#c9c9c9"
ctx.strokeStyle = "#c9c9c9"
ctx.fill();
ctx.beginPath();
ctx.moveTo(175,300);
ctx.lineTo(175,225);
ctx.lineTo(225,225);
ctx.lineTo(225,300);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#c9c9c9"
ctx.strokeStyle = "#c9c9c9"
ctx.fill();
