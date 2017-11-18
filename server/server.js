const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);  // can feed express app instead of (req, res) => {}
var io = socketIO(server);

app.use(express.static(publicPath));

/*
  Notes:
  - io.emit emit to all connections; 
  - socket.emit send only to a single connection
  - socket.broadcast.emit send to everyone else connected
*/

io.on('connection', (socket) => {
  console.log('New user connected');
  // a new user connected

  // socket.emit welcome message to this user
  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the Chat app!',
    createdAt: new Date().getTime()
  });

  // alert everyone else that someone is new here
  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined',
    createdAt: new Date().getTime()
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});