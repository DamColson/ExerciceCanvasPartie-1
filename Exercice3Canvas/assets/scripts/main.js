var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "darkred"; //corps rectangulaire principal en dark red
ctx.fillRect(160,220,320,200);
ctx.fillStyle = "red"; //porte en red
ctx.fillRect(280,260,80,140);
ctx.beginPath(); //poignée de porte
ctx.moveTo(320,320);
ctx.lineTo(340,320);
ctx.closePath();
ctx.stroke();
ctx.beginPath(); //demi cercle cul de voiture
ctx.arc(160,320,100,(Math.PI)/2,-(Math.PI)/2,false);
ctx.strokeStyle = "coral";
ctx.fillStyle = "darkred";
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath();//demi cercle avant de la voiture
ctx.arc(480,320,100,(Math.PI)/2,-(Math.PI)/2,true);
ctx.strokeStyle = "coral";
ctx.fillStyle = "darkred";
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.fillStyle = "white"; //coupure du demi cercle avant de la voiture
ctx.fillRect(560,220,320,200);
ctx.beginPath(); //phare avant
ctx.arc(560,320,30,(Math.PI)/2,-(Math.PI)/2,true);
ctx.strokeStyle = "coral";
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath(); //rayon de lumiere superieur
ctx.moveTo(580,290);
ctx.lineTo(600,260);
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.stroke();
ctx.moveTo(580,350);//rayon de lumiere inferieur
ctx.lineTo(600,380);
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.stroke();
ctx.moveTo(600,320); //rayon de lumiere central
ctx.lineTo(630,320);
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();
ctx.beginPath();//roue arriere
ctx.arc(180,440,60,0,2*Math.PI,true);
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.fillStyle = "silver";
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath();//rayon interne vertical de la roue arriere
ctx.moveTo(180,440);
ctx.lineTo(180,380);
ctx.lineTo(180,500);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();
ctx.beginPath();//rayon interne horizontal de la roue arriere
ctx.moveTo(180,440);
ctx.lineTo(120,440);
ctx.lineTo(240,440);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();
ctx.beginPath();//roue avant
ctx.arc(450,440,60,0,2*Math.PI,true);
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.fillStyle = "silver";
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath();//rayon interne vertical de la roue avant
ctx.moveTo(450,440);
ctx.lineTo(450,380);
ctx.lineTo(450,500);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();
ctx.beginPath();//rayon interne horizontal de la roue avant
ctx.moveTo(450,440);
ctx.lineTo(390,440);
ctx.lineTo(510,440);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(320,220,140,0,Math.PI,true); //coque conducteur
ctx.strokeStyle = "darkred";
ctx.fillStyle = "darkred";
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(320,220,100,0,Math.PI,true); //fenetre coque conducteur
ctx.strokeStyle = "lightblue";
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath(); //aileron arriere
ctx.moveTo(100,250);
ctx.lineTo(50,190);
ctx.lineTo(10,220);
ctx.strokeStyle = "darkred";
ctx.lineWidth = 30;
ctx.stroke();
ctx.closePath();
ctx.beginPath();//visage du personnage
ctx.arc(320,180,20,0,2*Math.PI,true);
ctx.strokeStyle = "coral";
ctx.fillStyle = "coral";
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.fillStyle = "black";//lunette
ctx.fillRect(330,160,20,15);
ctx.beginPath();//branche des lunettes
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.moveTo(330,167);
ctx.lineTo(310,167);
ctx.stroke();
ctx.closePath();
