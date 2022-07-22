import Router from "express";

import usersRoutes from "../routes/UsersRoutes.js";
import todosRoutes from "../routes/TodosRoutes.js";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/todos", todosRoutes);

export default routes;
