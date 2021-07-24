"use strict";
import { v4 as uuid } from "uuid";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: uuid(),
          name: "Retails",
          createdAt: "2021-07-22T22:00:00.000Z",
          updatedAt: "2021-07-22T22:00:00.000Z",
        },
        {
          id: uuid(),
          name: "Corporate",
          createdAt: "2021-07-22T22:00:00.000Z",
          updatedAt: "2021-07-22T22:00:00.000Z",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Categories', null, {});
    
  },
};
