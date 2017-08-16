'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });



server.register([
  Inert,
  Vision,
  {
    'register': HapiSwagger,
    'options': Options
  }], (err) => {
      server.start( (err) => {
         if (err) {
              console.log(err);
          } else {
              console.log('Server running at:', server.info.uri);
          }
      });
});

server.route(require('./routes'))
