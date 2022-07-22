import { Todo } from "../models/Todo.js";

export class TodosRepository {
  todos;

  static INSTANCE;

  constructor() {
    this.todos = [];
  }

  static getInstance() {
    if (!TodosRepository.INSTANCE) {
      TodosRepository.INSTANCE = new TodosRepository();
    }

    return TodosRepository.INSTANCE;
  }

  create({ title, username, done, deadline }) {
    const todo = new Todo();

    Object.assign(todo, {
      title,
      username,
      done,
      deadline,
      created_at: new Date(),
    });

    this.todos.push(todo);

    return todo;
  }

  findAllByUsername(username) {
    return this.todos.filter((todo) => todo.username === username);
  }

  markTodoAsDone(id) {
    const todo = this.todos.find((todo) => todo.id === id);

    Object.assign(todo, {
      done: true,
    });

    return todo;
  }

  updateTodoById({ id, title, username, deadline }) {
    const index = this.todos.findIndex((todo) => todo.id === id);

    Object.assign(this.todos[index], {
      title,
      username,
      deadline,
    });

    return this.todos[index];
  }

  deleteTodoById(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);

    this.todos.splice(index, 1);

    return;
  }
}
