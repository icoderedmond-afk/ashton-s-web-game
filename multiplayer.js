let socket=null;


let multiplayer=false;



function connectServer(){


socket=
new WebSocket(
"ws://localhost:3000"
);



socket.onopen=()=>{

console.log(
"Connected"
);

multiplayer=true;

};



socket.onmessage=e=>{


let data=
JSON.parse(e.data);


console.log(
data
);


};



}



function sendPlayer(){


if(!socket)
return;


socket.send(

JSON.stringify({

type:"move",

x:player.x,

y:player.y

})

);


}


setInterval(
sendPlayer,
50
);
