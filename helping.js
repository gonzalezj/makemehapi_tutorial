// Hapi Tutorial (makemehapi)
// Excercise #7

// helping.js

// declaration section
var hapi = require('hapi');
var path = require('path');
var server = new hapi.Server();

// second argument will be the port number
server.connection({
	port: process.argv[2] || 8080
});

// render the views
server.views({
    path: path.join(__dirname, 'templates'),
    engines: {
        html: require('handlebars')
    },
    helpersPath: path.join(__dirname, 'helpers')
});

server.route({
	method:'GET',
	path:'/',
	handler:{
		view: 'index.html'
	}
});

server.start();