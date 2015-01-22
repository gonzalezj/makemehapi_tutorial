// Hapi tutorial (makemehapi)
// Excercise #3

// handling.js

// declaration section
var hapi = require('hapi');
var path = require('path');
var server = new hapi.Server();

// second argument will be the port number
server.connection({
	port: process.argv[2] || 8080
});

server.route({
	method: 'GET',
	path: '/',
	handler: {
		file: path.join(__dirname, '/index.html')
	}
});

server.start();