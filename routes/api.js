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
	console.log("Node environment variable is " + process.env.NODE_ENV)
	if (process.env.NODE_ENV == undefined) {
		var options = {
			host: "localhost",
			port: 3000
		};
	} else {
		var options = {
			host: "http://mycookbook-api.herokuapp.com"
		};
	}
	options.path = "/recipes";
	options.method = "get";
	console.log(options)
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

// List of recipes from external API
router.get('/yummly-keyword/:keyword', function (req, res, next) {
	var options = {
		host: "api.yummly.com",
		path: "/v1/api/recipes?_app_id=678354c2&_app_key=5068cc5b8f8cc221124e6726a3622062&q=" + req.params.keyword,
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
		});
	}).end();
});

// Individual recipe from external API
router.get('/yummly-id/:id', function (req, res, next) {
	console.log("Request for Yummly hit received!")
	var options = {
		host: "api.yummly.com",
		path: "/v1/api/recipe/" + req.params.id + "?_app_id=678354c2&_app_key=5068cc5b8f8cc221124e6726a3622062",
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

router.get("/notes/:id", function (req, res, next) {
	if (process.env.NODE_ENV == undefined) {
		var options = {
			host: "localhost",
			port: 3000
		};
	} else {
		var options = {
			host: "http://mycookbook-api.herokuapp.com"
		};
	}
	options.path = "/recipes/" + req.params.id + "/notes";
	options.method = "get";
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
})

router.get("/:id", function (req, res, next) {
	if (process.env.NODE_ENV == undefined) {
		var options = {
			host: "localhost",
			port: 3000
		};
	} else {
		var options = {
			host: "http://mycookbook-api.herokuapp.com"
		};
	}
	options.path = "/recipes/" + req.params.id;
	options.method = "get";
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
})

router.post('/recipe', function (req, res, next) {
	if (process.env.NODE_ENV == undefined) {
		var options = {
			host: "localhost",
			port: 3000
		};
	} else {
		var options = {
			host: "http://mycookbook-api.herokuapp.com"
		};
	}
	options.path = "/recipes";
	options.method = "post";
    options.headers = {
        	"Content-Type": "application/json",
    	}
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
		});
	}).end(JSON.stringify(req.body));
})


router.post('/note/:id', function (req, res, next) {
	if (process.env.NODE_ENV == undefined) {
		var options = {
			host: "localhost",
			port: 3000
		};
	} else {
		var options = {
			host: "http://mycookbook-api.herokuapp.com"
		};
	}
	options.path = "/recipes/" + req.params.id + "/notes";
	options.method = "post";
	options.headers = {
    	"Content-Type": "application/json",
	}
	http.request(options, function(response) {
		console.log("Request sent to Rails API!");
		
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
	}).end(JSON.stringify(req.body));
})

module.exports = router;
