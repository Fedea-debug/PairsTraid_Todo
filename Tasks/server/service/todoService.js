const { todo } = require("../models");

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

  async getAll() {
    const all_todo = await todo.findAll({
      attributes: [
        `id`,
        `title`,
        `description`,
        `check`,
        `status`,
        `deadLine`,
        `user_id`,
        `tag_id`,
      ],
    });
    return all_todo;
  }

  async update(todoPut, id) {
    const updatedPost = await todo.update(todoPut, { where: { id: id } });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}
module.exports = new todoService();
