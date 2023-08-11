// server/config/serverConfig.js
module.exports = {
    port: process.env.PORT || 3001,
    corsOptions: {
      origin: 'http://localhost:3000',
      methods: 'POST',
      allowedHeaders: ['Content-Type'],
    },
  };
  