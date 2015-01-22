// Hapi Tutorial (makemehapi)
// Excercise #8

// streams.js

// declaration section
var hapi = require('hapi');
var fs = require('fs');
var stream = require('rot13-transform');
var path = require('path');
var server = new hapi.Server();

// the second argument will be the port number
server.connection({
	port: process.argv[2] || 8080
});

// the text file will be in the reply section
server.route({
	method:'GET',
	path:'/',
	config: {
        handler: function (request, reply) {
            var txtfile = fs.createReadStream(path.join(__dirname, './input.txt'));
            reply(txtfile.pipe(stream()));
        }
    }

});

server.start();
