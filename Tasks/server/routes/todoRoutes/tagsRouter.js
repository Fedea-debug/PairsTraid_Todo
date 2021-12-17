const { Router } = require("express");
const tagsController = require("../../controller/tagsController");

const route = new Router();

route.post("tags/post", tagsController.create);
route.get("tags/get", tagsController.getAll);

module.exports = route;
