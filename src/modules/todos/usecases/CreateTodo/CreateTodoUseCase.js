import { AppException } from "../../../../application/errors/AppException.js";
import { UsersRepository } from "../../../users/repositories/UsersRepository.js";
import { TodosRepository } from "../../repositories/TodoRepository.js";

export class CreateTodoUseCase {
  constructor() {
    this.todosRepository = TodosRepository.getInstance();
    this.usersRepository = UsersRepository.getInstance();
  }

  execute({ title, username, done, deadline }) {
    // O usuário deve existir com o username fornecido
    const user = this.usersRepository.findByUsername(username);

    if (!user) {
      throw new AppException(400, "User not found");
    }

    const todo = this.todosRepository.create({
      title,
      username,
      done,
      deadline,
    });

    return todo;
  }
}
