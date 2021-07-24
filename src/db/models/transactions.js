'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    account_number: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    balance: DataTypes.DOUBLE,
    type: DataTypes.STRING
  }, {});
  Transactions.associate = function(models) {
    Transactions.belongsTo(models.Accounts, {
      as: "cus_category",
      foreignKey: "account_number",
    });
  };
  return Transactions;
};