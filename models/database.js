'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class database extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  database.init({
    nama: DataTypes.STRING,
    umur: DataTypes.STRING,
    dataId: DataTypes.STRING,
    healthStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'database',
  });
  return database;
};