let http = require('http').Server();
let io = require('socket.io')(http);
let Redis = require("ioredis");

let redis = new Redis();
redis.subscribe("news-action");
redis.on('message',function (channel,message) {
   console.log('Message recieved:' + message);
   console.log("Chanel: " + channel);
   message = JSON.parse(message);
   io.emit(channel + ":" + message.event, message.data);
});

http.listen(3000,function () {
   console.log("listen port: 3000");
});