const tagsService = require("../service/tagsService");
const todoService = require("../service/todoService");

class todoController {
  async create(req, res) {
    try {
      console.log("uuid = ", req.uuid)
      const { value } = req.params;
      console.log(value);
      const tag_id = await tagsService.getByName(value);
      console.log(tag_id);
      if (tag_id === null) {
        return res.send({
          success: false,
          result: {
            message: "Tag not found",
          },
        });
      }
      const todo = await todoService.create(req.body, tag_id, req.uuid);
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
