const { Todo } = require("../models");

class todoService {
  async create(todo) {
    const createdTodo = await Todo.create(todo);
    return createdTodo;
  }

  async getAll() {
    const todo = await Todo.findAll();
    console.log(todo);
    return todo;
  }
}
module.exports = new todoService();
