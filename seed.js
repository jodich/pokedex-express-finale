const jsonfile = require('jsonfile');
const FILE = 'pokedex.json';

// REMEMBER TO CHANGE YOUR CONFIGS BEFORE RUNNING THIS SCRIPT!!
const pg = require('pg');
const config = {
	user: 'jodich',
	host: '127.0.0.1',
	database: 'pokemons_development',
	port: '5432'
};

if (config.user !== 'jodich') {
	throw new Error("====== UPDATE YOUR DATABASE CONFIGURATION =======");
}

const client = new pg.Client(config);

// Inserting Pokemons into pokemon table
jsonfile.readFile(FILE, (fileReadError, obj)=>{

	if (fileReadError) {

		throw new Error('File read error' + fileReadError.message);

	} else {

		client.connect((dbConnectError) => {
	
			if (dbConnectError) {

				throw new Error('Connection error: ' + dbConnectError.message);

			} else {

				console.log('Connected to database.');

				let pokemons = obj.pokemon;
				let text = 'INSERT INTO pokemons (name, num, img, weight, height, is_deleted, user_id) ' + ' VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
				let values = null;
				let isDeleted = 'false';
				let userId = 0;

				pokemons.forEach((pokemon) => {
					values = [pokemon.name, pokemon.num, pokemon.img, pokemon.weight, pokemon.height, isDeleted, userId];
					
					client.query(text, values, (dbQueryError, result) => {
						if (dbQueryError) {

							throw new Error("Query error:", dbQueryError.message);

						} else {

							console.log("Entry added:", result.rows[0].id);

						}
						if (result.rows[0].id == 151) { client.end() };
					});
				})
			}
		});
	}
});
