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
var connections;
logsprite();
io.sockets.on('connection',newConnection);

function newConnection(socket) {
    connections++;
    console.log('new connection' + socket.id);
    socket.on('sprites', sendast);
    socet.on('getshared', logshared);
    




}

// an enity is anything object in the game
Entity = function(param){
	var self = {
		x:250,
		y:250,
		spdX:0,
		spdY:0,
		id:"",
		
	}
	if(param){
		if(param.x)
			self.x = param.x;
		if(param.y)
			self.y = param.y;
		if(param.map)
			self.map = param.map;
		if(param.id)
			self.id = param.id;		
	}
	
	self.update = function(){
		self.updatePosition();
	}
	self.updatePosition = function(){
		self.x += self.spdX;
		self.y += self.spdY;
	}
	self.getDistance = function(pt){
		return Math.sqrt(Math.pow(self.x-pt.x,2) + Math.pow(self.y-pt.y,2));
	}
	return self;
}

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
/*function updateast( packet) {
    for (var i in packet) {

        pack[i]=packet[i];

    }
}*/

