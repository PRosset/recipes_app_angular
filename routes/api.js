var express = require('express');
var router = express.Router();
var http = require('http');

// Index of recipes
router.get('/', function(req, res, next) {
  var options = {
  	host: "localhost",
  	port: 3000,
  	path: "/recipes",
  	method: "get"
  };
  http.request(options, function(response) {
  	var body = '';

	//another chunk of data has been recieved, so append it to `str`
	response.on('data', function (chunk) {
		body += chunk;
		});

	//the whole response has been recieved, so we just print it out here
	response.on('end', function () {
		var parsed = JSON.parse(body)
		res.json(parsed);
		console.log(parsed);
	});
  }).end()
});

module.exports = router;
