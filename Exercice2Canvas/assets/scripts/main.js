var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.translate(200,100);
ctx.rotate((Math.PI)/4);
ctx.translate(-200,-100);

ctx.fillStyle = "#d88437";
ctx.fillRect(200-(50 * Math.sqrt(2)),100-(50 * Math.sqrt(2)),100 * Math.sqrt(2), 100 * Math.sqrt(2));

ctx.translate(200,100);
ctx.rotate(-(Math.PI)/4);
ctx.translate(-200,-100);

ctx.fillStyle = "#a0d7e6";
ctx.fillRect(100,100,200,200);

ctx.fillStyle = "#c9c9c9";
ctx.fillRect(125,125,50,50);

ctx.fillStyle = "#c9c9c9";
ctx.fillRect(225,125,50,50);

ctx.fillStyle = "#c9c9c9";
ctx.fillRect(175,225,50,75);
