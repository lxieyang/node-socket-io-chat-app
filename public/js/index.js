var socket = io();  // create connection with server using socket.io

// CONNECT
socket.on('connect', function () {
  console.log('Connected to server');
});

// DISCONNECT
socket.on('disconnect', function () {
  console.log('Disconnected from server')
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});