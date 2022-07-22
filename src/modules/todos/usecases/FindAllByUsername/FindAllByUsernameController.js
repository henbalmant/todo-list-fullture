import { FindAllByUsernameUseCase } from "./FindAllByUsernameUseCase.js";

export class FindAllByUsernameController {
  constructor() {
    this.findAllByUsernameUseCase = new FindAllByUsernameUseCase();
  }

  handle(request, response) {
    const { username } = request.params;

    const todos = this.findAllByUsernameUseCase.execute(username);

    return response.json(todos);
  }
}
