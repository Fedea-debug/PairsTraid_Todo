const { Router } = require("express");
const eventController = require("../../controller/Calendar/eventController");
const auth = require("../../middleware/checkTokenMiddleware");
//const validation = require("../../middleware/todoDataValidator");

const route = new Router();

route.post("/event/post/:value", auth, eventController.create);
route.get("/event/get", auth, eventController.getAll);
route.put("/event/put", auth, eventController.update);
route.delete("/event/delete", auth, eventController.delete);

module.exports = route;
