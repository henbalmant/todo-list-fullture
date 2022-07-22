import { CreateUserUseCase } from "./CreateUserUseCase.js";

export class CreateUserController {
  constructor() {
    this.createUserUseCase = new CreateUserUseCase();
  }

  handle(request, response) {
    const { name, username, email } = request.body;

    const user = this.createUserUseCase.execute({ name, username, email });

    return response.status(201).json(user);
  }
}
