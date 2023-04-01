require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
//const characterModel = require('./models/Character');
const favoriteModel = require('./models/Favorite');
const userModel = require('./models/User');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);

favoriteModel(sequelize);
userModel(sequelize);

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, {through: 'user_favorite'});
Favorite.belongsToMany(User, {through: 'user_favorite'});

module.exports = {
   ...sequelize.models,
   sequelize,
};
