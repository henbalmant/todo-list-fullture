const Router = require("express");
const usersRoutes = Router();

const {
  CreateUserController,
} = require("../modules/users/controllers/CreateUserController");

// Criação de usuários
const createUserController = new CreateUserController();
usersRoutes.post("/users", createUserController.handle);

// Listagem de usuários
usersRoutes.get("/users", createUserController.list);

module.exports = usersRoutes;
