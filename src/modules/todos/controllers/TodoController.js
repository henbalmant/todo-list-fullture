const todosRepository = [];

const { v4: uuidV4 } = require("uuid");

class TodoController {
  create(request, response) {
    // username -> Para definirmos quem é o "dono" da tarefa
    // title -> Definir o título da tarefa
    // deadline -> Data para conclusão da tarefa

    const { title, username, deadline } = request.body;

    // Validar se usuário existe
    // Se não existir, retorna um erro
    // Se existir, pode criar a tarefa

    const todo = {
      id: uuidV4(),
      title,
      username,
      deadline,
      done: false, // Booleano
    };

    todosRepository.push(todo);

    return response.json(todo).status(201);
  }

  findAllByUsername(request, response) {
    const { username } = request.params;

    const todos = todosRepository.filter((todo) => todo.username === username);

    return response.json({ todos });
  }

  markTodoAsDone(request, response) {
    const { id } = request.params;

    const todo = todosRepository.find((todo) => todo.id === id);

    if (!todo) {
      return response.json({ error: "Todo not found" }).send(404);
    }

    // ERRO: corrigir atualização do To Do!
    todo.done = false;
    todosRepository.push({ ...todo });

    return response.json(todo);
  }

  deleteTodoById(request, response) {
    const { id } = request.params;

    const todo = todosRepository.find((todo) => todo.id === id);

    if (!todo) {
      return response.json({ error: "Todo not found" }).send(404);
    }

    // Próxima aula: realizar exclusão do To Do no repositório!
  }

  updateTodoById(request, response) {
    const { id } = request.params;

    const todo = todosRepository.find((todo) => todo.id === id);

    if (!todo) {
      return response.json({ error: "Todo not found" }).send(404);
    }

    // Próxima aula: atualizar o To Do no repositório!
  }
}

module.exports = { TodoController };
