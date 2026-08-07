const canvas =
document.getElementById("game");

const ctx =
canvas.getContext("2d");


function resize(){

canvas.width=innerWidth;
canvas.height=innerHeight;

}

resize();

window.onresize=resize;



function draw(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



// map

drawMap(ctx);



// player

ctx.fillStyle =
player.shield?
"cyan":
"lime";


ctx.fillRect(
player.x,
player.y,
player.size,
player.size
);



// bots

ctx.fillStyle="red";


for(let bot of bots){

ctx.fillRect(
bot.x,
bot.y,
bot.size,
bot.size
);

}



// bullets

ctx.fillStyle="yellow";


for(let b of bullets){

ctx.beginPath();

ctx.arc(
b.x,
b.y,
5,
0,
Math.PI*2
);

ctx.fill();

}



// aim line

ctx.strokeStyle="white";

ctx.beginPath();

ctx.moveTo(
player.x+12,
player.y+12
);

ctx.lineTo(
mouse.x,
mouse.y
);

ctx.stroke();



}



function checkDamage(){


for(let b of bullets){


if(b.owner==="enemy"){


let d=
Math.hypot(
b.x-player.x,
b.y-player.y
);



if(d<25){


b.dead=true;


if(!player.shield){

player.hp-=10;


}


}


}


}



}




setInterval(()=>{

if(mouse.shoot)
shoot();


},120);





function loop(){


movePlayer();

updateBullets();

updateBots();

checkDamage();

draw();

updatePlayerUI();


requestAnimationFrame(loop);


}



loop();
