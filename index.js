var express = require('express');
var app = express();
var port = process.env.PORT || 3000
app.listen(port, function() {
	console.log('server running on port 3000');
} )

app.get('/name', callName);
//app.get('/food', callName);
function callName(req, res) {
	var spawn = require("child_process").spawn;
	var process = spawn('python',["./hello.py", req.query.firstname, req.query.lastname] );
	//var process = spawn('python',["./hello.py", req.query.foodname] );
	process.stdout.on('data', function(data) {
		res.send(data.toString());
	} )


