import Router from "express";

import { createTodoController } from "../modules/todos/usecases/CreateTodo/index.js";
import { findAllByUsernameController } from "../modules/todos/usecases/FindAllByUsername/index.js";

const todosRoutes = Router();

todosRoutes.post("/", (request, response) => {
  return createTodoController.handle(request, response);
});

todosRoutes.get("/:username", (request, response) => {
  return findAllByUsernameController.handle(request, response);
});

export default todosRoutes;
