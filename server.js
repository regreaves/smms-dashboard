const fastify = require('fastify')({ logger: true });
const router = require('./router.js');

fastify.register(require('@fastify/express'))
  .after(() => {
    fastify.use(router);
  });

fastify.listen({ port: 3000 });
