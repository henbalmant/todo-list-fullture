const Router = require("express");
const todosRoutes = Router();

const {
  TodoController,
} = require("../modules/todos/controllers/TodoController");
const todoController = new TodoController();

todosRoutes.post("/", todoController.create);
todosRoutes.get("/:username", todoController.findAllByUsername);
todosRoutes.patch("/:id", todoController.markTodoAsDone);

module.exports = todosRoutes;
