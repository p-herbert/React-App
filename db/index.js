const Sequelize = require('sequelize');

const db = {};
const sequelize = new Sequelize('postgres://localhost:5432/greetings', { logging: false });
const model = sequelize.import('models/greet');

db[model.name] = model;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;

