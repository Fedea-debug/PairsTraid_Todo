const { Router } = require("express");
const route = new Router();
const tagsRouter = require("./todoRoutes/tagsRouter");
const todoRouter = require("./todoRoutes/todoRouter");
const event_tag = require("./calendarRoutes/event_tagRouter");
const event = require("./calendarRoutes/eventRouter");

route.use("/todo1", todoRouter);
route.use("/tag1", tagsRouter);
route.use("/event_tag1", event_tag);
route.use("/event1", event);

module.exports = route;
