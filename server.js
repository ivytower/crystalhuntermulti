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

