var express = require('express');
const request = require('request');
var app = express();
var port = process.env.PORT || 3000
app.listen(port, function() {
	console.log('server running on port 3000');
} )

app.get('/food', callName);
function callName(req, res) {
	var spawn = require("child_process").spawn;
	var process = spawn('python',["./hello.py", req.query.foodname] );
	process.stdout.on('data', function(data) {
		res.send(data.toString());
	} )
}

app.get('/details', callDetails);
function callDetails(req,res) {

var query = '3lb carrots and a chicken sandwich';
request.get({
  url: 'https://api.calorieninjas.com/v1/nutrition?query='+query,
  headers: {
    'X-Api-Key': 'YXC9wHz0W/ebIP7HTJvnSA==6I0nMhcEbdoFzA5R'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else res.send(body);
});
}

