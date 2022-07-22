import { v4 as uuidV4 } from "uuid";

export class User {
  id;
  name;
  username;
  email;
  created_at;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
