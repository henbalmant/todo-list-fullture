const users = [];

const { v4: uuidV4 } = require("uuid");
class CreateUserController {
  handle(request, response) {
    const { name, username, email } = request.body;

    // Não pode ter o mesmo e-mail que outro usuário
    // Não pode ter o mesmo username que outro usuário

    const usernameAlreadyTaken = users.find(
      (user) => username === user.username
    );

    const emailAlreadyTaken = users.find((user) => email === user.email);

    if (usernameAlreadyTaken || emailAlreadyTaken) {
      return response.json({ error: "User already exists" }).send(400);
    }

    const user = { id: uuidV4(), name, username, email };

    users.push(user);

    return response.json(user).send(201);
  }
}

module.exports = { CreateUserController };
