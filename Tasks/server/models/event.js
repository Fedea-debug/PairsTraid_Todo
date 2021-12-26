"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {}
  event.init(
    {
      title: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      all_day: DataTypes.BOOLEAN,
      event_url: DataTypes.STRING,
      location: DataTypes.STRING,
      description: DataTypes.STRING,
      user_id: DataTypes.STRING,
      tag_id: {
        field: "tag_id",
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "events",
    }
  );

  event.associate = (models) => {
    event.belongsTo(models.event_tags, {
      foreignKey: "tag_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return event;
};
