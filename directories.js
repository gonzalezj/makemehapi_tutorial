// Hapi tutorial (makemehapi)
// Excercise #4

// directories.js

// declaration section
var hapi = require('hapi');
var path = require('path');
var server = new hapi.Server();


server.connection({
	port: process.argv[2] || 8080
});


server.route({
	method:'GET',
	path:'/foo/bar/baz/{filename*}',
	handler:{
		directory: {path: path.join(__dirname, './public')}
	}
});

server.start();