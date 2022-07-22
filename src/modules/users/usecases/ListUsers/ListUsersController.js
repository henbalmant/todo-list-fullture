import { ListUsersUseCase } from "./ListUsersUseCase.js";

export class ListUsersController {
  constructor() {
    this.listUsersUseCase = new ListUsersUseCase();
  }

  handle(request, response) {
    const users = this.listUsersUseCase.execute();

    return response.json(users);
  }
}
