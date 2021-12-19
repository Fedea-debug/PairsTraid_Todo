const tagsService = require("../service/tagsService");
const todoService = require("../service/todoService");

class todoController {
  async create(req, res) {
    try {
      const { tagQuery } = req.params;
      const todo = await todoService.create(req.body);
      const tag = await tagsService.getByName(tagQuery);
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
