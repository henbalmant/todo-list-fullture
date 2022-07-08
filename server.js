const express = require("express");
const routes = require("./routes");

const app = express();

// GET - receber informações ou dados
// POST - enviar informações ou dados
// PUT - atualizar informações ou dados
// DELETE - deletar informações ou dados
// PATCH - atualizar informações parciais

app.use(express.json());
app.use(routes);

app.get("/", (request, response) => {
  response.json({ message: "Hello World" });
});

app.listen(3333, () => console.log("🚀 Server is running on port 3333"));
