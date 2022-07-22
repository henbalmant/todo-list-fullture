import { v4 as uuidV4 } from "uuid";

export class Todo {
  id;
  title;
  username;
  done;
  deadline;
  created_at;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    if (!this.done) {
      this.done = false;
    }
  }
}
