const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
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
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));

  // alert everyone else that someone is new here
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined the chat!'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});