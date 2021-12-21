const { Router } = require("express");
const todoController = require("../../controller/todoController");
const auth = require("../../middleware/checkTokenMiddleware")

const route = new Router();

route.post("/todo/post/:value",auth, todoController.create);
route.get("/todo/get/:value", todoController.getAll);

module.exports = route;
