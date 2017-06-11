/**
 * Created by Cash on 5/14/2017.
 */

var express=require('express');
var app=express();
var server=app.listen(3000);
app.use(express.static('client'));

console.log("socket server running");
var socket=require('socket.io');
var io=socket(server);
var pack = [];
var SOCKET_LIST = {};
var connections;
logsprite();
io.sockets.on('connection',newConnection);

function newConnection(socket) {
    connections++;
    console.log('new connection' + socket.id);
    socket.on('sprites', sendast);
    socet.on('getshared', logshared);
    






function sendast() {

    socket.emit('getasteroids', pack);

    //console.log(movement);
//console.log(socket);

}
function logsprite() {



        for (var i = 0; i < 50; i++) {

            pack.push({
                key: Math.floor(Math.random() * 5),
                x: Math.random() * (5000 - 500) + 500,
                y: Math.random() * (5000 - 500) + 500,
            });
        }

    //console.log(movement);
}
    
 // updates all elements   
setInterval(function(){
	var packs = Entity.getFrameUpdateData();
	for(var i in SOCKET_LIST){
		var socket = SOCKET_LIST[i];
		socket.emit('init',packs.initPack);
		socket.emit('update',packs.updatePack);
		socket.emit('remove',packs.removePack);
	}
	
},1000/25);
/*function updateast( packet) {
    for (var i in packet) {

        pack[i]=packet[i];

    }
}*/

