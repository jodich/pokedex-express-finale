// IMPORT DATABASE
const pool = require('../db.js');

// DEFINE models
const createPoke = (newPoke, isDeleted, userId, callback) => {

	let queryString = 'INSERT INTO pokemons(num, name, img, weight, height, is_deleted, user_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;';
	let values = [newPoke.num, newPoke.name, newPoke.img, newPoke.weight, newPoke.height, isDeleted, userId];

    pool.query(queryString, values, callback);
    // callback would be an anonymous function that does stuff with the returned information
};

const addPokeToUser = (userId, pokemonId, callback) => {

	let queryString = 'INSERT INTO users_pokemons(user_id, pokemon_id) VALUES ($1, $2)'
	let values = [userId, pokemonId]

	pool.query(queryString, values, callback);

};

const getOnePoke = (pokemonId, callback) => {

	let queryString = 'SELECT * FROM pokemons WHERE id = $1';
	let values = [pokemonId];

	pool.query(queryString, values, callback);

};

const getAllPoke = (sortmethod, callback) => {

	let queryString = "SELECT * FROM pokemons WHERE is_deleted='false' AND user_id = 0 ORDER BY "+sortmethod+" ASC";

	pool.query(queryString, callback);

};

const updatePoke = (pokemon, pokemonId, callback) => {

	let queryString = 'UPDATE pokemons SET num=($1), name=($2), img=($3), height=($4), weight=($5) WHERE id=($6)';
	let values = [pokemon.num, pokemon.name, pokemon.img, pokemon.height, pokemon.weight, pokemonId]

	pool.query(queryString, values, callback);
};

const isDelete = (pokemonId, callback) => {

	let queryString = "UPDATE pokemons SET is_deleted='true' WHERE id= $1"
	let values = [pokemonId]

	pool.query(queryString, values, callback);
}


// EXPORT models
module.exports = {
	createPoke,
	addPokeToUser,
	getOnePoke,
	getAllPoke,
	updatePoke,
	isDelete
}
