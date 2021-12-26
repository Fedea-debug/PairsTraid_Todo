const { Router } = require("express");
const event_tagsController = require("../../controller/Calendar/event_tagController");

const route = new Router();

route.post("/event_tag/post", event_tagsController.create);
route.get("/event_tag/get", event_tagsController.getAll);
route.get("/event_tag/get/:value", event_tagsController.getByName);

module.exports = route;
