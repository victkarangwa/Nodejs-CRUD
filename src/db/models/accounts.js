"use strict";
module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define(
    "Accounts",
    {
      customer_number: DataTypes.STRING,
      account_number: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {}
  );
  Accounts.associate = function (models) {
    Accounts.belongsTo(models.Customers, {
      as: "customer",
      foreignKey: "customer_number",
    });
  };
  return Accounts;
};
