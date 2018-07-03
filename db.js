const pg = require('pg');

const configs = {
  user: 'jodich',
  host: '127.0.0.1',
  database: 'pokemons_development',
  port: 5432
};


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = pool;