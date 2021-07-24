'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
    name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    phone_number: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Customers.associate = function(models) {
    Customers.belongsTo(models.Category, {
      as: "cus_category",
      foreignKey: "category",
    });
  };
  return Customers;
};