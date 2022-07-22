import Router from "express";

import { createUserController } from "../modules/users/usecases/CreateUser/index.js";
import { listUsersController } from "../modules/users/usecases/ListUsers/index.js";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  return listUsersController.handle(request, response);
});

export default usersRoutes;
