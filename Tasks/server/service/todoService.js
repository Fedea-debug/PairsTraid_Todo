const { todo } = require("../models");

class todoService {
  async create(todo_req, tag_id, uuid) {
    console.log("todoservice"+ tag_id)
    const createdTodo = await todo.create({
      title: todo_req.title,
      description: todo_req.description,
      check:todo_req.check,
      status: todo_req.status,
      deadLine: todo_req.deadLine,
      tag_id: tag_id,
      user_id: uuid
    })
    return createdTodo;
  }

  async getAll() {
    const all_todo = await todo.findAll();
    console.log(all_todo);
    return all_todo;
  }
}
module.exports = new todoService();
