const users = [];

class CreateUserUsecase {
  execute({ name, username, email }) {
    // Não pode ter o mesmo e-mail que outro usuário
    // Não pode ter o mesmo username que outro usuário

    const usernameAlreadyTaken = users.find(
      (user) => username === user.username
    );

    const emailAlreadyTaken = users.find((user) => email === user.email);

    if (usernameAlreadyTaken || emailAlreadyTaken) {
      return response.json({ error: "User already exists" }).send(400);
    }

    const user = { name, username, email };

    users.push(user);

    return user;
  }
}

module.exports = { CreateUserUsecase };
