let bullets=[];


let mouse={

x:0,

y:0,

shoot:false

};



document.addEventListener(
"mousemove",
e=>{

mouse.x=e.clientX;

mouse.y=e.clientY;

});



document.addEventListener(
"mousedown",
e=>{


if(e.button===0)
mouse.shoot=true;



if(e.button===2)
activateShield();



if(e.button===1)
reload();


});



document.addEventListener(
"mouseup",
e=>{


if(e.button===0)
mouse.shoot=false;


});



document.addEventListener(
"contextmenu",
e=>e.preventDefault()
);



document.addEventListener(
"wheel",
e=>{

if(e.deltaY>0)
reload();

});




function reload(){

player.ammo=
player.maxAmmo;

}




function shoot(){


if(player.ammo<=0)
return;



player.ammo--;



let angle=Math.atan2(

mouse.y-player.y,

mouse.x-player.x

);



bullets.push({

x:player.x,

y:player.y,

dx:Math.cos(angle)*12,

dy:Math.sin(angle)*12,

owner:"player"

});


}





function updateBullets(){


for(let b of bullets){


b.x+=b.dx;

b.y+=b.dy;



for(let wall of walls){


if(

b.x>wall.x &&
b.x<wall.x+wall.w &&
b.y>wall.y &&
b.y<wall.y+wall.h

){

b.dead=true;

}

}


}



bullets=
bullets.filter(
b=>!b.dead
);



}
