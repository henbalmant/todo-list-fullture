import { UsersRepository } from "../../../users/repositories/UsersRepository.js";
import { TodosRepository } from "../../repositories/TodoRepository.js";
import { CreateTodoUseCase } from "./CreateTodoUseCase.js";
import { CreateTodoController } from "./CreateTodoController.js";

const usersRepository = UsersRepository.getInstance();
const todosRepository = TodosRepository.getInstance();

const createTodoUseCase = new CreateTodoUseCase(
  usersRepository,
  todosRepository
);

const createTodoController = new CreateTodoController(createTodoUseCase);

export { createTodoController };
