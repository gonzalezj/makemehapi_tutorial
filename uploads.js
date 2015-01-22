// Hapi tutorial (makemehapi)
// Excercice #11

// uploads.js

// declaration section
var hapi = require('hapi');
var server = new hapi.Server();

// the second argument will be the port number
server.connection({
	port: process.argv[2] || 8080
});


server.route({
  method: 'POST',
  path: '/upload',
  config: {
    handler: function (request, reply) {

      var body = '';

      request.payload.file.on('data', function (data){

        body += data
      })

      request.payload.file.on('end', function (){

        var ret = {
          description: request.payload.description,
          file: {
            data: body,
            filename: request.payload.file.hapi.filename,
            headers: request.payload.file.hapi.headers
          }
        }

        reply(JSON.stringify(ret));
      })

    },
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
});

server.start();