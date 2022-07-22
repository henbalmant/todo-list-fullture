import { AppException } from "../../../../application/errors/AppException.js";
import { UsersRepository } from "../../../users/repositories/UsersRepository.js";
import { TodosRepository } from "../../repositories/TodoRepository.js";

export class FindAllByUsernameUseCase {
  constructor() {
    this.todosRepository = TodosRepository.getInstance();
    this.usersRepository = UsersRepository.getInstance();
  }

  execute(username) {
    // Se não existir usuário com o username informado, retornar um erro
    const user = this.usersRepository.findByUsername(username);

    if (!user) {
      throw new AppException(400, "User not found");
    }

    const todos = this.todosRepository.findAllByUsername(username);

    return todos;
  }
}
