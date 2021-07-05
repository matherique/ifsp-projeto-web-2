export class InvalidUserData extends Error {
  constructor() {
    super("Invalid user data");
    this.name = "InvalidUserData";
  }
}

