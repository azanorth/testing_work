let Routes = [
  {
    method: 'GET',
    path: '/main',
    config: {
      handler: (req, reply) => {
        reply('Hello world!');
      },
      tags: ['GET', 'main'],
      description: 'get swagger test.',
      plugins: {
        'hapi-swagger': {
          responses: {
            '200': {
              'description': 'Company founded.',
            },
            '404': {
              'description': 'Company not found.',
            }
          }
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/{name}',
    handler: (req, reply) => {
        reply('Hello ' + encodeURIComponent(req.params.name) + ' !');
    }
  },
  {
    method: 'POST',
    path: '/post',
    handler: (req, reply) => {
      reply(req.payload);
    }
  
  }
];

module.exports = Routes;
