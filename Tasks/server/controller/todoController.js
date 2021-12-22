const tagsService = require("../service/tagsService");
const todoService = require("../service/todoService");

class todoController {
  async create(req, res, next) {
    try {
      const { value } = req.params;
      const tag_id = await tagsService.getByName(value);
      const todo = await todoService.create(req.body, tag_id, req.uuid);
      return res.json(todo);
    } catch (e) {
      res.status(500).json(e.errors[0].value);
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

  async update(req, res) {
    try {
      const updatedTodo = await todoService.update(req.body, req.body.id);
      return res.json(updatedTodo);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const post = await PostService.create(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
module.exports = new todoController();
