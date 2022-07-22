import { UsersRepository } from "../../../users/repositories/UsersRepository.js";
import { TodosRepository } from "../../repositories/TodoRepository.js";
import { FindAllByUsernameUseCase } from "./FindAllByUsernameUseCase.js";
import { FindAllByUsernameController } from "./FindAllByUsernameController.js";

const usersRepository = UsersRepository.getInstance();
const todosRepository = TodosRepository.getInstance();

const findAllByUsernameUseCase = new FindAllByUsernameUseCase(
  usersRepository,
  todosRepository
);

const findAllByUsernameController = new FindAllByUsernameController(
  findAllByUsernameUseCase
);

export { findAllByUsernameController };
