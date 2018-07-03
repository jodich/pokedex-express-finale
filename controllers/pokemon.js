// IMPORT models
const models = require('../models/pokemon.js');


// DEFINE controllers
const allPoke = (request, response) => {
	// shows all the pokemon

	let sortmethod = '';

	if (request.query.sortby == "name") {
		sortmethod = "name";
	} else {
		sortmethod = 'id';
	}

	models.getAllPoke(sortmethod, (err, result) => {

		response.render('pokemon/allpokemon', {pokemon: result.rows})

	})
};

const onePokePage = (request, response) => {
	let pokemonId = request.params.id;

	 models.getOnePoke(pokemonId, (err, result) => {

		response.render('pokemon/pokemon', {pokemon: result.rows[0]})
	})
};

const newPokePage = (request, response) => {
	let userId = request.cookies['user_id']

	if (userId == undefined) {
		response.send('go make an account or log in!')
	} else {
		response.render('pokemon/new')
	}
};

const editPokePage = (request, response) => {

	let userId = request.cookies['user_id']

	if (userId == undefined) {
		response.send('go make an account or log in!')
	} else {

		let pokemonId = request.params.id;

		models.getOnePoke(pokemonId, (err, result) => {
			response.render('pokemon/edit', {pokemon: result.rows[0]})
		})
	}
};

const deletePokePage = (request, response) => {

	let userId = request.cookies['user_id']

	if (userId == undefined) {
		response.send('go make an account or log in!')
	} else {
		let pokemonId = request.params['id'];

		models.getOnePoke(pokemonId, (err, result) => {

	      response.render('pokemon/delete', {pokemon: result.rows[0]});
	    })
	}
};

//POST
const postNewPoke = (request, response) => {
	let newPoke = request.body

	newPoke.weight += ' kg';
	newPoke.height += ' m';

	let userId = request.cookies['user_id'];
	let isDeleted = 'false'

	models.createPoke(newPoke, isDeleted, userId, (err, result) => {
		// newPoke, isDeleted, userId are passed into createPoke to use as values

		let pokemonId = result.rows[0].id
		models.addPokeToUser(userId, pokemonId, (err, result) => {

			response.redirect('/user');
		});

	});
};

const postPoke = (request, response) => {

	let userId = request.cookies['user_id'];

	if (userId == undefined) {
		response.send('go make an account or log in!')
	} else {
		let pokemonId = request.params['id'];

		models.addPokeToUser(userId, pokemonId, (err, result) => {

			response.redirect('/user')
		})
	}
}

//PUT
const putPoke = (request, response) => {
	let pokemon = request.body
	let pokemonId = request.params['id'];

	console.log(pokemonId);

	pokemon.weight += ' kg';
	pokemon.height += ' m';

	models.updatePoke(pokemon, pokemonId, (err, result) => {

		response.redirect('/pokemon/')
	})
};

//DELETE
const deletePoke = (request, response) => {
	let pokemonId = request.params.id;

	models.isDelete(pokemonId, (err, result) => {

		response.redirect('/');
	})

};


// EXPORT controllers
module.exports = {
	allPoke,
	onePokePage,
	newPokePage,
	editPokePage,
	deletePokePage,
	postNewPoke,
	postPoke,
	putPoke,
	deletePoke
}








