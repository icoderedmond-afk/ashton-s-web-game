let player = {

    x:500,
    y:500,

    size:25,

    speed:5,

    hp:100,

    ammo:30,

    maxAmmo:30,

    shield:false,

    shieldSeconds:0,

    score:0

};


let keys={};


document.addEventListener(
"keydown",
e=>{

keys[e.key.toLowerCase()]=true;


if(e.key.toLowerCase()=="n"){

    noclip=!noclip;

}

});


document.addEventListener(
"keyup",
e=>{

keys[e.key.toLowerCase()]=false;

});



let noclip=false;



function movePlayer(){


let oldX=player.x;

let oldY=player.y;



if(keys.w)
player.y-=player.speed;


if(keys.s)
player.y+=player.speed;


if(keys.a)
player.x-=player.speed;


if(keys.d)
player.x+=player.speed;



if(!noclip){


for(let wall of walls){


if(
collision(
player,
wall
)
){

player.x=oldX;

player.y=oldY;

}


}


}


}



function activateShield(){


if(player.shield)
return;


player.shield=true;


let time=30;


let timer=setInterval(()=>{


time--;


player.shieldSeconds=time;


if(time<=0){

clearInterval(timer);

player.shield=false;

}


},1000);


}



function updatePlayerUI(){


document.getElementById(
"hp"
).textContent=
Math.floor(player.hp);



document.getElementById(
"ammo"
).textContent=
player.ammo;



document.getElementById(
"shield"
).textContent=
player.shield?
"ON "+player.shieldSeconds+"s":
"READY";



document.getElementById(
"score"
).textContent=
player.score;


}
