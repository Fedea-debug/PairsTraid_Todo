const { Router } = require("express");
const todoController = require("../../controller/Todo/todoController");
const auth = require("../../middleware/checkTokenMiddleware");
const validation = require("../../middleware/todoDataValidator");

const route = new Router();

route.post("/todo/post/:value", auth, validation, todoController.create);
route.get("/todo/get", auth, todoController.getAll);
route.put("/todo/put", auth, validation, todoController.update);
route.delete("/todo/delete", auth, todoController.delete);

module.exports = route;
