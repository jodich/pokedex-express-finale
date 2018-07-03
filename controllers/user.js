// IMPORT MODELS
const models = require('../models/user.js');
const sha256 = require('js-sha256');

// DEFINE controllers
const getUserPage = (request, response) => {
    // shows the user's pokemon only
    let userId = request.cookies['user_id'];
    let hasedCookie = request.cookies["logged_in"]

    if (models.checkAuth(userId, hasedCookie)) {

        models.userPoke(userId, (err, result) => {
            response.render('user/userpokemon', {pokemon: result.rows});
        })
    } else {
        response.send('go make an account or log in!')
    }
};

const newForm = (request, response) => {
    response.render('user/new')
};

const postNewUser = (request, response) => {

    let newUser = request.body;
    newUser.password = sha256(newUser.password);

    models.createNewUser(newUser.email, newUser.password, (error, result) => {

        let currentSessionCookie = sha256(result.rows[0].id + SALT);
                
        response.cookie('logged_in', currentSessionCookie);
        response.cookie('user_id', result.rows[0].id);

        response.redirect('/user')
    });
};

const loginForm = (request, response) => {
    response.render('user/login')
};

const postLogin = (request, response) => {

    let inputUser  = request.body;
    inputUser.password = sha256(inputUser.password);

    models.getUser('email', inputUser.email, (error, result) => {

        if (result.rows[0] == undefined) {
            response.send('no user with this email')
        } else {
            if(result.rows[0].password === inputUser.password) {

                // let currentSessionCookie = sha256(result.rows[0].id + SALT);
                // response.cookie('logged_in', currentSessionCookie);
                
                models.setAuth(result.rows[0].id, response);
                response.cookie('user_id', result.rows[0].id);

                response.redirect('/user');

            } else {
                response.send('password is wrong')
            }
        }
    });
};

const getLogout = (request, response) => {
    response.clearCookie('logged_in');
    response.clearCookie('user_id');

    response.redirect('/');
};



// EXPORT controllers
module.exports = {
    getUserPage,
    newForm,
    postNewUser,
    loginForm,
    postLogin,
    getLogout
}











