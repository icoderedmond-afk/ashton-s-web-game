let bots=[];


function createBot(){


bots.push({

x:Math.random()*900,

y:Math.random()*700,

size:25,

hp:100,

speed:1.5,

cooldown:0

});


}



for(let i=0;i<5;i++)
createBot();





function updateBots(){


for(let bot of bots){



let dx=
player.x-bot.x;


let dy=
player.y-bot.y;


let distance=
Math.sqrt(
dx*dx+dy*dy
);



if(distance>180){


bot.x+=
dx/distance*
bot.speed;


bot.y+=
dy/distance*
bot.speed;


}



// shoot from distance

if(distance<400){

bot.cooldown--;


if(bot.cooldown<=0){

enemyShoot(bot);

bot.cooldown=60;

}


}


}


}





function enemyShoot(bot){


let angle=
Math.atan2(
player.y-bot.y,
player.x-bot.x
);



bullets.push({

x:bot.x,

y:bot.y,

dx:Math.cos(angle)*6,

dy:Math.sin(angle)*6,

owner:"enemy"

});


}
