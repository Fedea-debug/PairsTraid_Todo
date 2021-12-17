"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("todo_tags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      todo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "todos", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "tags", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("todo_tags");
  },
};
