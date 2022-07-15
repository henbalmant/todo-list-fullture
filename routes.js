const Router = require("express");

const usersRoutes = require("./src/routes/UsersRoutes");
const todosRoutes = require("./src/routes/TodosRoutes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/todos", todosRoutes);

module.exports = routes;
