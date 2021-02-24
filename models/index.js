'use strict';
require('dotenv').config();
let fs        = require('fs');
let path      = require('path');
let Sequelize = require('sequelize');
let basename  = path.basename(module.filename);
let env       = process.env.NODE_ENV || 'development';
let config    = require(__dirname + '/../config/config.js')[env];
let db        = {};
let sequelize;

const connection = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql',
};

if (process.env.JAWSDB_MARIA_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_MARIA_URL || connection);
} else if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
