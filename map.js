const walls=[

{
x:300,
y:200,
w:120,
h:300
},

{
x:700,
y:300,
w:150,
h:100
},

{
x:550,
y:650,
w:250,
h:70
},

{
x:100,
y:600,
w:200,
h:70
}

];


function drawMap(ctx){

ctx.fillStyle="#555";


for(let wall of walls){

ctx.fillRect(
wall.x,
wall.y,
wall.w,
wall.h
);

}

}



function collision(a,b){

return(

a.x < b.x+b.w &&

a.x+a.size > b.x &&

a.y < b.y+b.h &&

a.y+a.size > b.y

);

}
