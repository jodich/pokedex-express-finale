/**
 * Routes file.
 *
 * All routes you want to match in the app should appear here.
 * Upon match, a corresponding controller method should be called.
 *
 * Export as a function using `module.exports`,
 * to be imported (using `require(...)`) in `index.js`.
 */


module.exports = (app, db) => {

  const users = require('./controllers/user.js');
  const pokemons = require('./controllers/pokemon.js');
  // from controller x can refer to file paths in routes which have the function in controllers y

  // USER ROUTES 
  app.get('/user', users.getUserPage );
  app.get('/user/new', users.newForm );
  app.get('/user/login', users.loginForm );
  app.get('/user/logout', users.getLogout );

  app.post('/user', users.postNewUser );
  app.post('/user/login', users.postLogin );


  // POKEMON ROUTES 
  app.get('/pokemon', pokemons.allPoke );
  app.get('/pokemon/new', pokemons.newPokePage );
  app.get('/pokemon/:id', pokemons.onePokePage );
  app.get('/pokemon/:id/edit', pokemons.editPokePage );
  app.get('/pokemon/:id/delete', pokemons.deletePokePage );

  app.post('/pokemon', pokemons.postNewPoke );
  app.post('/pokemon/:id', pokemons.postPoke);

  app.put('/pokemon/:id', pokemons.putPoke);

  app.delete('/pokemon/:id', pokemons.deletePoke );
};


//  **URL**           | **HTTP Verb** | **Action**
// ----------------   | ------------- | ----------
// /pokemons/         | GET           | index     
// /pokemons/new      | GET           | new       
// /pokemons          | POST          | create    
// /pokemons/:id      | GET           | show      
// /pokemons/:id/edit | GET           | edit      
// /pokemons/:id      | PATCH/PUT     | update    
// /pokemons/:id      | DELETE        | destroy 