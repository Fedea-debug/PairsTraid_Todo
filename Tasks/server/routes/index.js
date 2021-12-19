const { Router } = require("express");
const route = new Router();
const tagsRouter = require("./todoRoutes/tagsRouter");
const todoRouter = require("./todoRoutes/todoRouter");

route.use("/todo1", todoRouter);
route.use("/tag1", tagsRouter);

module.exports = route;
