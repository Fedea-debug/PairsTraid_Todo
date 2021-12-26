const ApiError = require("../../error/apiError");
const tagsService = require("../../service/Todo/tagsService");
const todoService = require("../../service/Todo/todoService");
const toBool = require("../../lib/helper");

class todoController {
  async create(req, res, next) {
    try {
      const { value } = req.params;
      const tag_id = await tagsService.getByName(value);
      const todo = await todoService.create(req.body, tag_id, req.uuid);
      return res.json(todo);
    } catch (e) {
      return res.status(500).json({
        success: false,
        result: {
          message: "Something went wrong",
          status: 500,
        },
      });
    }
  }

  async getAll(req, res) {
    try {
      const status = toBool(req.query.status);
      const limit = parseInt(req.query.limit) || 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;

      //const status = req.params.status;
      console.log(status);
      if (status === undefined) {
        console.log("if statement" + status);
        return res.status(500).json({
          success: false,
          result: {
            message: "Status undefined",
            status: 404,
          },
        });
      }
      const todo = await todoService.getAll(limit, offset, req.uuid, status);
      if (todo.count === 0) {
        return res.status(404).json({
          success: false,
          result: {
            message: "No Todos",
            status: 404,
          },
        });
      }
      return res.json(todo);
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        success: false,
        result: {
          message: "Something went wrong",
          status: 500,
        },
      });
    }
  }

  async update(req, res) {
    try {
      const updatedTodo = await todoService.update(req.body, req.body.id);
      return res.json(updatedTodo);
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        success: false,
        result: {
          message: "Something went wrong",
          status: 500,
        },
      });
    }
  }
  async delete(req, res) {
    try {
      const id = parseInt(req.query.id);
      const deletedTodo = await todoService.delete(id);
      return res.json(deletedTodo);
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        success: false,
        result: {
          message: "Something went wrong",
          status: 500,
        },
      });
    }
  }
}
module.exports = new todoController();
