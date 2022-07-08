const users = [];

class CreateUserController {
  handle(request, response) {
    const { name, username, email } = request.body;

    const user = { name, username, email };

    users.push(user);

    return response.json({ user }).send(201);
  }

  list(request, response) {
    response.json({ users });
  }
}

module.exports = { CreateUserController };
