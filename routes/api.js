var express = require('express');
var router = express.Router();
var http = require('http');
// var getCallback = function(response) {
//   	var body = '';

// 	//another chunk of data has been recieved, so append it to `str`
// 	response.on('data', function (chunk) {
// 		body += chunk;
// 		});

// 	//the whole response has been recieved, so we just print it out here
// 	response.on('end', function () {
// 		var parsed = JSON.parse(body)
// 		res.json(parsed);
// 		console.log(parsed);
// 	});
// }

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
	}).end();
});

// Recipe from external API
router.get('/yummly/:keyword', function (req, res, next) {
	console.log("Request for Yummly hit received!")
	var options = {
		host: "api.yummly.com",
		path: "/v1/api/recipes?_app_id=678354c2&_app_key=5068cc5b8f8cc221124e6726a3622062&q=" + req.params.keyword,
		method: "get"
	};
	http.request(options, function(response) {
		console.log("Request sent to Yummly!")
		
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
	}).end();
});

module.exports = router;
