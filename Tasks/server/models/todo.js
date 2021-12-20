"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Tags, {
        foreignKey: "tagID",
        as: "todo",
      });
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      check: DataTypes.BOOLEAN,
      status: DataTypes.BOOLEAN,
      deadLine: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
