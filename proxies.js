// Hapi Tutorial (makemehapi)
// Excercise #6

// proxies.js

// declaration section
var hapi = require('hapi');
var server = new hapi.Server();

// the second argument will be the port number
server.connection({
	port: process.argv[2] || 8080
});

// According to the instructions you need to create a server
// listening on port 65535
server.route({
	method:'GET',
	path: '/proxy',
	handler:{
		proxy:{
			host: '127.0.0.1',
			port: 65535
		}
	}
});

server.start();