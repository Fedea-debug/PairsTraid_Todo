"use strict";
const { Model } = require("sequelize");
const todo = require("./todo");
module.exports = (sequelize, DataTypes) => {
  class tags extends Model {}
  tags.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tags",
      tableName: "tags",
    }
  );

  tags.beforeSync(() => console.log("b4 creating the tags table"));
  tags.afterSync(() => console.log("after creating the tags table"));

  tags.associate = (models) => {
    tags.hasMany(models.todo, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return tags;
};
