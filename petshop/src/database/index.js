const Sequilize = require('sequelize');
const dbConfig = require('../config/database');

const Cliente = require('../models/Cliente')

const connection = new Sequilize(dbConfig);

Cliente.init(connection);

module.exports = connection;