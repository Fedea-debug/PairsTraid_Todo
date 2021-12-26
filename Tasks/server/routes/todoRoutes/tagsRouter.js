const { Router } = require("express");
const tagsController = require("../../controller/Todo/tagsController");

const route = new Router();

route.post("/tags/post", tagsController.create);
route.get("/tags/get", tagsController.getAll);
route.get("/tags/get/:value", tagsController.getByName);

module.exports = route;
