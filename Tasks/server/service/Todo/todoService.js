const { todo } = require("../../models");

class todoService {
  async create(todo_req, tag_id, uuid) {
    const createdTodo = await todo.create({
      title: todo_req.title,
      description: todo_req.description,
      check: todo_req.check,
      status: todo_req.status,
      deadLine: todo_req.deadLine,
      tag_id: tag_id,
      user_id: uuid,
    });
    return createdTodo;
  }

  async getAll(limit_req, offset_req, uuid, status) {
    const all_todo = await todo.findAndCountAll({
      attributes: [
        `id`,
        `title`,
        `description`,
        `check`,
        `status`,
        `deadLine`,
        `user_id`,
        `tagId`,
      ],

      // if(status) {
      //   where: {
      //     status: status;
      //   }
      // },

      limit: limit_req,
      offset: offset_req,
    });

    return all_todo;
  }

  async update(todoPut, id) {
    const updatedTodo = await todo.update(todoPut, { where: { id: id } });
    return updatedTodo;
  }

  async delete(id) {
    const deletedTodo = await todo.destroy({ where: { id: id } });
    return deletedTodo;
  }
}
module.exports = new todoService();
