// Hapi tutorial (makemehapi)
// Excercise #5

// views.js

// declaration section
var hapi = require('hapi');
var path = require('path');
var server = new hapi.Server();

// the second argument will be the port number
server.connection({
	port: process.argv[2] || 8080
});

server.route({
	method:'GET',
	path:'/{filename*}',
	handler:{
		view: 'index.html'
	}
});

// render the view
server.views({
	engines:{
		html: require('handlebars')
	},
	path: path.join(__dirname, 'templates')

});

server.start();
