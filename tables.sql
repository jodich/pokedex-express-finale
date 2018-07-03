-- create pokemons table
CREATE TABLE IF NOT EXISTS pokemons (
  id SERIAL PRIMARY KEY,
  num varchar(255),
  name varchar(255),
  img varchar(255),
  weight varchar(255),
  height varchar(255),
  is_deleted varchar(255),
  user_id INTEGER
);

-- create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email varchar(255),
  password varchar(255)
);

-- create users and pokemons relational table
CREATE TABLE IF NOT EXISTS users_pokemons (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  pokemon_id INTEGER
);
