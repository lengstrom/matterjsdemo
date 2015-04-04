var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 8080;

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

app.get('/poll', function(req, res){
	var angle = (parseFloat(req.query.d))/70;
	io.emit('d', angle);
	console.log(angle);
	res.status(200).end();
});

app.use(express.static(__dirname + '/static'));
io.on('connection', function(socket) {
	console.log("socket connected!")
});

