/**
 * Created by Cash on 5/14/2017.
 */

var express=require('express');         // Require node module express
var app=express();                      // Create an express object
var server=app.listen(3000);            // Tell the express object to listen on port 3000
app.use(express.static('/client'));     // Have the express object use the client directory

console.log("socket server running");   
var socket=require('socket.io');        // Require node module socket.io
var io=socket(server);                  // Create a connection with the express object 
var pack = [];
var connections;
logsprite();
io.sockets.on('connection',newConnection);

function newConnection(socket) {
    connections++;                                  // Increases the number on active connections
    console.log('New Connection: ' + socket.id);    // Logs the new socket connection id
    socket.on('sprites', sendast);                  // 
    socket.on('getshared', logshared);              // 




}
function sendast() {

    socket.emit('getasteroids', pack);

    //console.log(movement);
//console.log(socket);

}
function logsprite() {



        for (var i = 0; i < 50; i++) {

            pack.push({
                key: Math.floor(Math.random() * 5),     // Picks a random color asteroid
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

