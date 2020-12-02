var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3001;

app.get('/', function(req, res){
  res.send("Nguyen Quang Phuoc");
});

var messages = []
io.on('connection', (socket) => {
  socket.on('last-messages', function (fn) {
    fn(messages.slice(-50))
  })
  socket.on('send-message', function (message) {
    messages.push(message)
    socket.broadcast.emit('new-message', message)
  })
})

http.listen(port, "127.0.0.1");