'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('People', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    hobbies: DataTypes.STRING,
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};
