const { Router } = require("express");
const todoController = require("../../controller/todoController");

const route = new Router();

route.post("/todo/post/:value", todoController.create);
route.get("/todo/get", todoController.getAll);

module.exports = route;
