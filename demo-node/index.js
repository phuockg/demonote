var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user_chat', {useNewUrlParser: true, useNewUrlParser: true,  useUnifiedTopology: true});
var port = 3001;
var db = mongoose.connection;
db.on('error', function(err) {
  if (err) console.log("khoong thanh cong")
});
//Bắt sự kiện open
db.once('open', function() {
  console.log("Kết nối thành công !");
});
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
  date:String,
  chat:Object
});
var Users = mongoose.model('Users', userSchema);

var dataInserts = {
  id:"1",
  date:"11/10/2020",
  chat:[
      {
          name:"Doãn Quốc Thịnh",
          contentChat:"Hello ,How are you",
          date:"2020-12-03T08:35:06.766Z"
      },
  ]
}
// var userCollections = new Users(dataInserts);
    // userCollections.save(function (err, data) {
    //       if (err) return console.error(err);
    //       console.log(data)     
    //     });
app.get('/',  function(req, res){
  res.send("Nguyen Quang Phuoc");
});

var messages = []

io.on('connection', (socket) => {
  socket.on('last-messages',async function (fn) {
    var lastData = await Users.find()

    fn(lastData[0].chat)
  })
  socket.on('send-message',async function (message) {
    dataInserts = {...dataInserts,chat:[...dataInserts.chat,message]}
// update data
    await Users.update({"date":"11/10/2020"},{$set:{'chat':dataInserts.chat}})
    socket.broadcast.emit('new-message', message)
  })
})

http.listen(port, "127.0.0.1");