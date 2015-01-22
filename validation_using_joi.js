// Hapi tutorial (makemehapi)
// Excercise #10

// Validation using JOI object

// validation_using_joi.js

// declaration section
var hapi = require('hapi');
var joi = require('joi');
var server = new hapi.Server();

// the second argument will be the port number
server.connection({
	port: process.argv[2] || 8080
});

// use Joi to validate User
server.route({
	method:'POST',
	path:'/login',
	config: {
        handler: function (request, reply) {
            reply('login successful');
        },
        validate: {
            payload: joi.object({
                isGuest: joi.boolean().required(),
                username: joi.when('isGuest', { 
                	is: false, then: joi.required() 
                }),
                password: joi.string().alphanum(),
                accessToken: joi.string().alphanum()
            }).options({ allowUnknown: true }).without('password', 'accessToken')
        }
    }
});

server.start();
