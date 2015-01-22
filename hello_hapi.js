// Hapi totorial (makemehapi)
// Excercise #1

// hello_hapi.js

// declaration section
var hapi = require('hapi');
var server = new hapi.Server();

// the second argument will be the port number
server.connection({
	port: process.argv[2] || 8080
});

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		reply('Hello Hapi');
	}
});

server.start();