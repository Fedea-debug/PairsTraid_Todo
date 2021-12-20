const tagsService = require("../service/tagsService");
const todoService = require("../service/todoService");
const tagsController = require("./tagsController");

class todoController {
  async create(req, res) {
    try {
      const { tagName } = req.params;
      const tag_id = await tagsController.getByName(tagName);
      const todo = await todoService.create(req.body, tag_id);
      return res.json(todo);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const todo = await todoService.getAll();
      return res.json(todo);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
module.exports = new todoController();
