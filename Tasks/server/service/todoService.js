const { Todo } = require("../models");

class todoService {
  async create(todo, tag_id) {
    const createdTodo = await Todo.create(todo , {
      tagID: tag_id
    });
    return createdTodo;
  }

  async getAll() {
    const todo = await Todo.findAll();
    console.log(todo);
    return todo;
  }
}
module.exports = new todoService();
