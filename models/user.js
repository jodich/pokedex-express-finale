const pool = require('../db');
const sha256 = require('js-sha256');

const SALT = 'banana'
// models
const createNewUser = (email, password, callback) => {

	let queryString = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *';
	let values = [email, password];

	pool.query(queryString, values, callback);
	// callback would be an anonymous function that does stuff with the returned information
};

  	// can get via id, email or password. Just need to specifiy in identifier
const getUser = (identifier, value, callback) => {

  	let queryString = 'SELECT * FROM users WHERE '+identifier+' = $1';
  	let values = [value];

  	pool.query(queryString, values, callback)
};

const userPoke = (userId, callback) => {
	let queryString = "SELECT pokemons.* FROM users INNER JOIN users_pokemons ON (users_pokemons.user_id = users.id) INNER JOIN pokemons ON (users_pokemons.pokemon_id = pokemons.id) WHERE is_deleted='false' AND users_pokemons.user_id = ($1) ORDER BY id";
    let values = [userId];

    pool.query(queryString, values, callback)
};

const checkAuth = (userId, hasedCookie) => {

	if (sha256(userId + SALT) === hasedCookie) {
		return true
	} else {
		return false
	}
};

const setAuth = (userId, response) => {

	let currentSessionCookie = sha256(userId + SALT);
	response.cookie('logged_in', currentSessionCookie)

};



// EXPORT MODELS
module.exports = {
	createNewUser,
	getUser,
	userPoke,
	checkAuth,
	setAuth
}









