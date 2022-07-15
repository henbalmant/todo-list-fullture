const Router = require("express");
const usersRoutes = Router();

const {
  CreateUserController,
} = require("../modules/users/controllers/CreateUserController");

// Criação de usuários
const createUserController = new CreateUserController();

// http://localhost:3333/users/ -> implementar a partir daqui
usersRoutes.post("/", createUserController.handle);

module.exports = usersRoutes;
