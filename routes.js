const Router = require("express");

const usersRoutes = require("./src/routes/UsersRoutes");

const routes = Router();

routes.use(usersRoutes);

module.exports = routes;
