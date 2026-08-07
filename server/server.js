const WebSocket =
require("ws");


const server =
new WebSocket.Server({
port:3000
});



let players=[];



server.on(
"connection",
socket=>{


let player={

id:Date.now(),

x:500,

y:500,

socket

};


players.push(player);



socket.on(
"message",
msg=>{


let data=
JSON.parse(msg);



if(data.type==="move"){


player.x=data.x;

player.y=data.y;



broadcast();


}


});




socket.on(
"close",
()=>{


players=
players.filter(
p=>p!==player
);


});



});






function broadcast(){


let data=
JSON.stringify({

type:"players",

players:
players.map(p=>({

id:p.id,

x:p.x,

y:p.y

}))


});



for(let p of players){

p.socket.send(data);

}


}
