import { UsersRepository } from "../../repositories/UsersRepository.js";

export class ListUsersUseCase {
  constructor() {
    this.usersRepository = UsersRepository.getInstance();
  }

  execute() {
    return this.usersRepository.list();
  }
}
