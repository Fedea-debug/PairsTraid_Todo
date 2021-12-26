"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event_tags extends Model {}
  event_tags.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "event_tags",
      tableName: "event_tags",
    }
  );

  event_tags.associate = (models) => {
    event_tags.hasMany(models.events, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return event_tags;
};
