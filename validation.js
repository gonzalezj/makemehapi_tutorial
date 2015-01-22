// Hapi tutorial (makemehapi)
// Excercise #9

// validation.js

// declaration section
var hapi = require('hapi');
var Joi = require('joi');
var server = new hapi.Server();

// the second argument will be the port number
server.connection({
	port: process.argv[2] || 8080
});

// parameter 'breed' should be explicitly add it.
server.route({
	method:'GET',
	path: '/chickens/{breed}',
	config: {
        handler: function (request, reply) {
            reply('You asked for the chicken ' + request.params.breed);
        },
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
});

server.start();
