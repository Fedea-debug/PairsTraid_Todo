"use strict";
const { Model } = require("sequelize");
const tags = require("./tags");

module.exports = (sequelize, DataTypes) => {
  class todo extends Model {}
  todo.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      check: DataTypes.BOOLEAN,
      status: DataTypes.BOOLEAN,
      deadLine: DataTypes.DATE,
      user_id: DataTypes.STRING,
      tagId: {
        field: "tag_id",
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "todo",
    }
  );

  todo.beforeSync(() => console.log("b4 creating the todo table"));
  todo.afterSync(() => console.log("after creating the todo table"));

  todo.associate = (models) => {
    todo.belongsTo(models.tags, {
      foreignKey: "tag_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return todo;
};
