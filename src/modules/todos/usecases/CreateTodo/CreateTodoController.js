import { CreateTodoUseCase } from "./CreateTodoUseCase.js";

export class CreateTodoController {
  constructor() {
    this.createTodoUseCase = new CreateTodoUseCase();
  }

  handle(request, response) {
    const { title, username, done, deadline } = request.body;

    const todo = this.createTodoUseCase.execute({
      title,
      username,
      done,
      deadline,
    });

    return response.status(201).json(todo);
  }
}
